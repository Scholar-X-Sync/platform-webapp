'use client';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../../public/logo.jpg';
import { getRole } from '@/lib/server-utils';

const navItems = [
  { name: 'Student', href: '/admin/student' },
  { name: 'Departments', href: '/admin/departments' },
];

const Layout = ({ children }: React.PropsWithChildren) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const fetchRole = async () => {
      const role = await getRole();
      setRole(role);
    };
    fetchRole();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gray-900 text-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 grid grid-cols-9">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            onClick={() => (window.location.href = '/' + role)}
          />
          <nav className="flex items-center justify-between col-span-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold hover:text-gray-300 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="flex">
              <Button className="h-7">
                <LogOut />
                Logout
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <div className="flex-grow py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </div>
    </main>
  );
};
export default Layout;
