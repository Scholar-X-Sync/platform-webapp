'use client';
import CreateStudent from '@/components/admin/student/CreateStudent';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const items = [
  { name: 'Create Student', component: <CreateStudent /> },
  // { name: 'Student List', href: '/admin/studentList' },
  // { name: 'Student Search', href: '/admin/studentSearch' },
  // { name: 'Student Edit', href: '/admin/studentEdit' },
  // { name: 'Student Delete', href: '/admin/studentDelete' },
  // { name: 'Student marks', href: '/admin/studentMarks' },
  // { name: 'Student Attendance', href: '/admin/studentAttendance' },
  // { name: 'Student Fee', href: '/admin/studentFee' },
  // { name: 'Student Payment', href: '/admin/studentPayment' },
];

const Layout = () => {
  const [selectedComponent, setSelectedComponent] =
    useState<React.ReactNode>(null);

  const handleItemClick = (component: React.ReactNode) => {
    setSelectedComponent(component);
  };

  return (
    <div className="flex">
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.name}>
              <Button onClick={() => handleItemClick(item.component)}>
                {item.name}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1">{selectedComponent}</div>
    </div>
  );
};

export default Layout;
