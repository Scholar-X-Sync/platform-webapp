import axiosInstance from '@/lib/axiosInstance';
import { LoginSchema } from '@/lib/schemas/auth/LoginSchema';
import { z } from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const { success, data } = LoginSchema.safeParse(values);

  if (!success) {
    throw new Error('Invalid email or password');
  }

  const { email, password } = data;

  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    });

    return {
      success: true,
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Something went wrong',
      success: false,
    };
  }
};
