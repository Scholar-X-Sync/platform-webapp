"use client"
import React from 'react'

const navItems = [
  {name:'Create Student', href:'/admin/createStudent'},
  {name:'Student List', href:'/admin/studentList'},
  {name:'Student Search', href:'/admin/studentSearch'},
  {name:'Student Edit', href:'/admin/studentEdit'},
  {name:'Student Delete', href:'/admin/studentDelete'},
  {name:'Student marks', href:'/admin/studentMarks'},
  {name:'Student Attendance', href:'/admin/studentAttendance'},
  {name:'Student Fee', href:'/admin/studentFee'},
  {name:'Student Payment', href:'/admin/studentPayment'},
]
const Layout = ({children}:React.PropsWithChildren) => {
  return (
    <main className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex space-x-4">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="hover:underline">
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      <div className="flex-grow p-4">{children}</div>
    </main>
  )
}
export default Layout
