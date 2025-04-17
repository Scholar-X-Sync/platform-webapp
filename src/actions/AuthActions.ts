import axiosInstance from '@/lib/axiosInstance';
import { LoginSchema } from '@/lib/schemas/auth/LoginSchema';
import { z } from 'zod';
import Cookies from 'js-cookie';

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

    if (response.status !== 200) {
      throw new Error('Invalid email or password');
    }

    axiosInstance.defaults.headers.common['Authorization'] =
      `Bearer ${response.data.token}`;

    Cookies.set('token', response.data.token);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Something went wrong',
      success: false,
    };
  }
};
