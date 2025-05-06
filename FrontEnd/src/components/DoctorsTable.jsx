import React, { useState } from 'react'
import { FaSort, FaEllipsisV } from 'react-icons/fa'
import DoctorForm from './DoctorForm';

export default function DoctorsTable({ data, onDelete, onEdit }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 overflow-x-auto">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-1 rounded w-1/3"
        />
        <div className="flex space-x-2">
          <select className="border px-2 py-1 rounded">
            <option>All Specialties</option>
            <option>Heart Surgeon</option>
            <option>Neurologist</option>
            <option>Pediatrician</option>
            <option>Dermatologist</option>
          </select>
          <select className="border px-2 py-1 rounded">
            <option>Last 12 Months</option>
            <option>Last 6 Months</option>
            <option>Last 3 Months</option>
          </select>
        </div>
      </div>

      <table className="w-full text-sm text-left">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            {['No','Name','Specialty','DOB','Email Address','Status','Contact','Action'].map(h => (
              <th key={h} className="py-3 px-4">
                <div className="flex items-center">
                  {h} <FaSort className="ml-1 text-xs cursor-pointer"/>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={d._id} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4">{String(i+1).padStart(2,'0')}</td>
              <td className="py-3 px-4">
                <div className="flex items-center">
                  <img
                    src={d.avatar || "https://via.placeholder.com/40"}
                    alt=""
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="font-medium">{d.name}</span>
                </div>
              </td>
              <td className="py-3 px-4">{d.specialty}</td>
              <td className="py-3 px-4">{d.dob}</td>
              <td className="py-3 px-4">{d.email}</td>
              <td className="py-3 px-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                  Active
                </span>
              </td>
              <td className="py-3 px-4">{d.contact}</td>
              <td className="py-3 px-4 relative">
                <button 
                  onClick={() => toggleDropdown(d._id)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <FaEllipsisV />
                </button>
                
                {activeDropdown === d._id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 py-1">
                    <button
                      onClick={() => {
                        onEdit(d);
                        setActiveDropdown(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => {
                        onDelete(d._id);
                        setActiveDropdown(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {data.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No doctors found. Add a new doctor to get started.
        </div>
      )}
      <DoctorForm/>
    </div>
  )
}
