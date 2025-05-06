import React, { useState, useEffect } from 'react';
import { createDoctor, updateDoctor } from '../services/doctorService';

const DoctorForm = ({ onSuccess, editData, setEditData }) => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    dob: '', 
    specialty: '',
    status: 'Active',
    contact: ''
  });

  useEffect(() => {
    if (editData) setFormData(editData);
  }, [editData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      let result;
      if (editData && editData._id) {
        result = await updateDoctor(editData._id, formData);
        if (setEditData) setEditData(null); // Clear edit mode
      } else {
        result = await createDoctor(formData);
      }
      
      // Reset form after successful submission
      setFormData({ 
        name: '', 
        email: '', 
        dob: '', 
        specialty: '',
        status: 'Active',
        contact: '' 
      });
      
      // Notify parent component about the successful operation
      if (onSuccess) {
        onSuccess(result);
      }
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mb-6">
      <div className="grid grid-cols-2 gap-4">
        <input 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Name" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="specialty" 
          value={formData.specialty} 
          onChange={handleChange} 
          placeholder="Specialty" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Email" 
          type="email" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="dob" 
          value={formData.dob} 
          onChange={handleChange} 
          placeholder="DOB" 
          className="border p-2 rounded" 
          required 
        />
        <input 
          name="contact" 
          value={formData.contact} 
          onChange={handleChange} 
          placeholder="Contact Number" 
          className="border p-2 rounded" 
          required 
        />
        <select 
          name="status" 
          value={formData.status} 
          onChange={handleChange} 
          className="border p-2 rounded" 
          required
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="On Leave">On Leave</option>
        </select>
      </div>
      <div className="flex justify-between mt-4">
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
          {editData ? 'Update Doctor' : 'Add Doctor'}
        </button>
        {editData && (
          <button 
            type="button" 
            onClick={() => setEditData && setEditData(null)} 
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default DoctorForm;
