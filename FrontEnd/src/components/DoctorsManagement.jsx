import React, { useState, useEffect } from 'react';
import DoctorsTable from './DoctorsTable';
import DoctorForm from './DoctorForm';
import { getDoctors, deleteDoctor } from '../services/doctorService';

const DoctorsManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch doctors on component mount
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      setLoading(true);
      const data = await getDoctors();
      setDoctors(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching doctors:', err);
      setError('Failed to load doctors. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this doctor?')) {
      try {
        await deleteDoctor(id);
        // Update the local state by removing the deleted doctor
        setDoctors(doctors.filter(doctor => doctor._id !== id));
      } catch (err) {
        console.error('Error deleting doctor:', err);
        alert('Failed to delete doctor. Please try again.');
      }
    }
  };

  const handleEdit = (doctor) => {
    setEditData(doctor);
    // Scroll to the form
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSuccess = (result) => {
    fetchDoctors(); // Refresh the list after add/update
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Doctors Management</h1>
      
      <DoctorForm 
        onSuccess={handleSuccess} 
        editData={editData} 
        setEditData={setEditData} 
      />
      
      {loading ? (
        <div className="text-center py-4">Loading doctors...</div>
      ) : error ? (
        <div className="text-center py-4 text-red-500">{error}</div>
      ) : (
        <DoctorsTable 
          data={doctors} 
          onDelete={handleDelete} 
          onEdit={handleEdit} 
        />
      )}
    </div>
  );
};

export default DoctorsManagement;
