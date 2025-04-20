import { z } from 'zod';

export const CreateStudentSchema = z.object({
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  role: z.enum(['student', 'admin'], {
    errorMap: () => ({ message: 'Role is required' }),
  }),
  phoneNumber: z.string(),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    zip: z.string(),
  }),
  rollNumber: z.string().optional(),
  admissionDate: z.string().optional(),
  departmentId: z.string().optional(),
});
