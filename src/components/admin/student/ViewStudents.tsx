'use client';

import { getAllStudents } from '@/actions/AdminActions';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import Fuse from 'fuse.js';

const ViewStudents = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [fuse, setFuse] = useState<Fuse<never> | null>(null);

  useEffect(() => {
    (async () => {
      const response = await getAllStudents();
      if (response.success) {
        setUsers(response.data.users);
      } else {
        setError(response.error || 'Failed to fetch students');
      }
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setFuse(
      new Fuse(users, {
        keys: ['firstName', 'lastName', 'email', 'student.rollNumber'],
        threshold: 0.3,
      }),
    );
  }, [users]);

  useEffect(() => {
    if (!searchTerm) {
      setResults(users);
      return;
    }

    if (fuse) {
      const fuseResults = fuse.search(searchTerm).map((r) => r.item);
      setResults(fuseResults);
    }
  }, [searchTerm, users]);

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
      ) : users.length === 0 ? (
        <p className="text-gray-600">No students found.</p>
      ) : (
        <div className="overflow-x-auto space-y-10">
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <table className="min-w-full border rounded shadow-sm">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Roll No</th>
              </tr>
            </thead>
            <tbody>
              {results.map((user: any, index: number) => (
                <tr
                  key={index}
                  className="even:bg-gray-100 even:text-slate-800 transition"
                >
                  <td className="py-2 px-4">
                    {user.firstName + ' ' + user.lastName}
                  </td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.student.rollNumber}</td>
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
