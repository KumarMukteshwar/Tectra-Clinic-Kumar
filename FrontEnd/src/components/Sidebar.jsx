import React from 'react';

import { FaTachometerAlt, FaStethoscope, FaClipboardList, FaUser, FaCalendarAlt, FaComments, FaFileInvoiceDollar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen shadow p-6 space-y-4">
      <h1 className="text-xl font-bold">Tectra Clinic</h1>
      <nav className="space-y-2">
        <a href="/dashboard" className="flex items-center p-2 rounded hover:bg-gray-100">
          <FaTachometerAlt className="mr-3"/> Dashboard
        </a>
        <a href="/doctors" className="flex items-center p-2 rounded hover:bg-gray-100">
          <FaStethoscope className="mr-3"/> Doctors
        </a>
        <hr className="my-2"/>
        <p className="text-sm text-gray-400 uppercase">Applications</p>
        <ul className="space-y-1 text-gray-600">
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaClipboardList className="mr-3"/> Telemedicine</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaFileInvoiceDollar className="mr-3"/> Inventory</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaFileInvoiceDollar className="mr-3"/> Insurance</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaUser className="mr-3"/> Patients</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaCalendarAlt className="mr-3"/> Appointments</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaComments className="mr-3"/> Chats</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaClipboardList className="mr-3"/> Medical Services</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaClipboardList className="mr-3"/> Dental Services</li>
          <li className="flex items-center p-2 rounded hover:bg-gray-50"><FaFileInvoiceDollar className="mr-3"/> Billing & Invoice</li>
        </ul>
      </nav>
    </aside>
  )
}
