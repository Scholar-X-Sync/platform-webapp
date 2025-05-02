'use server';
import axiosInstance from '@/lib/axiosInstance';
import { z } from 'zod';
import { CreateStudentSchema } from '@/lib/schemas/admin/CreateStudentSchema';

export const createStudent = async (
  values: z.infer<typeof CreateStudentSchema>,
) => {
  const { success, data } = CreateStudentSchema.safeParse(values);

  if (!success) {
    throw new Error('Invalid student details');
  }
  const { firstName, lastName, email, password, role, phoneNumber, address } =
    data;
  try {
    console.log(
      'Creating student with values:======================================>',
      {
        firstName,
        lastName,
        email,
        password,
        role,
        phoneNumber,
        ...address,
      },
    );
    const response = await axiosInstance.post('/user/createUser', {
      firstName,
      lastName,
      email,
      password,
      role,
      phoneNumber,
      ...address,
    });

    if (response.status !== 201) {
      throw new Error('Invalid email or password');
    }

    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    return {
      error: e instanceof Error ? e.message : 'Something went wrong',
      success: false,
    };
  }
};
