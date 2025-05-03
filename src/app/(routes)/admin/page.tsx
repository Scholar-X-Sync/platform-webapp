'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import StudentSidebar from '@/components/admin/sidebar/Student';
import FallbackComponent from '@/components/admin/FallbackComponent';

const navItems: {
  name: string;
  component: (props?: any) => React.ReactNode;
}[] = [
  {
    name: 'Student',
    component: (props) => <StudentSidebar {...props} />,
  },
];

export default function Page() {
  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const [mainComponent, setMainComponent] = useState<React.ReactNode | null>(
    null,
  );

  const handleTabClick = (name: string) => {
    setCurrentTab((prev) => (prev === name ? null : name));
    setMainComponent(null);
  };

  const renderSidebar = () => {
    if (!currentTab) return null;
    const item = navItems.find((item) => item.name === currentTab);
    return item?.component({ mainComponent, setMainComponent });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex space-x-4 ">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant={currentTab === item.name ? 'secondary' : 'default'}
              size="sm"
              onClick={() => handleTabClick(item.name)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </header>

      <div className="flex w-full max-w-7xl mx-auto mt-6 px-4 space-x-6 flex-1 py-8">
        {currentTab && (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -250, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut', type: 'spring' }}
            className="w-64 bg-white shadow-lg rounded-2xl p-4"
          >
            {renderSidebar()}
          </motion.div>
        )}

        <main className="flex-1">
          <Card className="shadow-sm">
            <CardContent className="p-6">
              {mainComponent || <FallbackComponent />}
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
}
