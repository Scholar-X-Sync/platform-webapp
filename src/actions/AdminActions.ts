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
  const {
    firstName,
    lastName,
    email,
    password,
    role,
    phoneNumber,
    address,
    rollNumber,
  } = data;
  try {
    const response = await axiosInstance.post('/user', {
      firstName,
      lastName,
      email,
      password,
      role,
      phoneNumber,
      rollNumber,
      address,
      admissionDate: new Date().toISOString(),
      departmentId: '11067189-2de7-4de2-a84e-d3ce6d0c6c7c',
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

export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get('/user', {
      params: {
        role: 'student',
      },
    });

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
