'use client';

import { getAllStudents } from '@/actions/AdminActions';
import { useEffect, useState } from 'react';

const ViewStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    (async () => {
      const response = await getAllStudents();
      if (response.success) {
        setStudents(response.data.users);
      } else {
        setError(response.error || 'Failed to fetch students');
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Student List</h2>

      {loading ? (
        <div className="text-center py-10">
          <div className="inline-block w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-2 text-gray-600">Loading students...</p>
        </div>
      ) : error ? (
        <div className="text-red-500 bg-red-100 p-4 rounded">{error}</div>
      ) : students.length === 0 ? (
        <p className="text-gray-600">No students found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border rounded shadow-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Enrollment No</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student: any, index: number) => (
                <tr
                  key={index}
                  className="even:bg-gray-100 hover:bg-gray-200 transition"
                >
                  <td className="py-2 px-4">
                    {student.firstName + ' ' + student.lastName}
                  </td>
                  <td className="py-2 px-4">{student.email}</td>
                  <td className="py-2 px-4">{student.rollNumber}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ViewStudents;
