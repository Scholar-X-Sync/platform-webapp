'use client';
import { createStudent } from '@/actions/AdminActions';
import { Button } from '@/components/ui/button';
import { getAllDepartments } from '@/actions/DepartmentActions';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { CreateStudentSchema } from '@/lib/schemas/admin/CreateStudentSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Lock, Text } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { CreateStudentSchema } from '@/lib/schemas/admin/CreateStudentSchema';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import {
  Mail,
  Lock,
  Text,
  CalendarIcon,
  ChevronsUpDown,
  Check,
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreateStudent = () => {
  const [departments, setDepartments] = React.useState<any[]>([]);
  const router = useRouter();
  const form = useForm<z.infer<typeof CreateStudentSchema>>({
    resolver: zodResolver(CreateStudentSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      role: 'student',
      phoneNumber: '',
      address: { city: '', state: '', street: '', zipCode: '' },
      rollNumber: '',
      admissionDate: '',
      departmentId: '',
    },
  });
  useEffect(() => {
    const fetchDepartments = async () => {
      const response = await getAllDepartments();
      setDepartments(response.data);
    };
    fetchDepartments();
  }, []);

  const onSubmit = async (values: z.infer<typeof CreateStudentSchema>) => {
    try {
      const response = await createStudent(values);

      if (!response.success) {
        throw new Error(response.error || 'Failed to create student');
      }

      router.push('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center h-full  justify-center min-h-screen dark:from-zinc-900 dark:to-zinc-950 p-4 w-full">
      <div className="w-3/4 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl dark:shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create Student
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Please enter the student details to create a new account
        </p>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 text-white"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="John"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input className="pl-10" placeholder="Doe" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="example@email.com"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          className="pl-10"
                          type="password"
                          placeholder="••••••••"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="1234567890"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="rollNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Roll Number</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <Input
                          className="pl-10"
                          placeholder="21891A6638"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="admissionDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Admission Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-[240px] pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="departmentId"
                render={({ field }) => (
                  <FormItem className="flex flex-col w-full">
                    <FormLabel>Department</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'w-[80%] justify-between',
                              !field.value && 'text-muted-foreground',
                            )}
                          >
                            {field.value
                              ? departments.find(
                                  (dept) => dept.id === field.value,
                                )?.name
                              : 'Select Department'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search Department..." />
                          <CommandList>
                            <CommandEmpty>No Department found.</CommandEmpty>
                            <CommandGroup>
                              {departments.map((department) => (
                                <CommandItem
                                  value={department.name}
                                  key={department.id}
                                  onSelect={() => field.onChange(department.id)}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      field.value === department.id
                                        ? 'opacity-100'
                                        : 'opacity-0',
                                    )}
                                  />
                                  {department.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="grid grid-cols-2 gap-4 col-span-2">
                <FormField
                  control={form.control}
                  name="address.street"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Street</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input
                            className="pl-10"
                            placeholder="123 Main Street"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>City</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input
                            className="pl-10"
                            placeholder="Houston"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.state"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>State</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input
                            className="pl-10"
                            placeholder="Texas"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="address.zipCode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Zip</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                          <Input
                            className="pl-10"
                            placeholder="12345"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit" className="w-full">
              Create Student
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CreateStudent;
