"use client";
import { Button } from '@/components/ui/button';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const CreateStudent = () => {
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
      address: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateStudentSchema>) => {
    try {
      console.log('Form Values:======================================>', values);
      const response = await fetch('http://localhost:3333/user/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
      console.log('Response:', response);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create student');
      }

      router.push('/admin');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center  justify-center min-h-screen dark:from-zinc-900 dark:to-zinc-950 p-4 w-3/4">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl dark:shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">
          Create Student
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400">
          Please enter the student details to create a new account
        </p>
        
        {/* Form Provider Wrapper */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* First Name */}
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

            {/* Last Name */}
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Text className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <Input
                        className="pl-10"
                        placeholder="Doe"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
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

            {/* Password */}
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

            {/* Phone Number */}
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
                        placeholder="+1234567890"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Address */}
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
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