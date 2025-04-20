'use server';

import axiosInstance from '@/lib/axiosInstance';

export const getAllDepartments = async () => {
  try {
    const response = await axiosInstance.get('/department');

    return {
      success: true,
      data: response.data.departments,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : 'Something went wrong',
      success: false,
    };
  }
};
