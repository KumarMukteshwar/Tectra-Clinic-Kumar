import React from 'react';

const DoctorCard = ({ doctor, onDelete, onEdit }) => {
  return (
    <div className="bg-white rounded shadow p-4 mb-4 flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold">{doctor.name}</h3>
        <p>{doctor.specialty}</p>
        <p>{doctor.email}</p>
        <p>{doctor.dob}</p>
      </div>
      <div className="space-x-2">
        <button onClick={() => onEdit(doctor)} className="bg-blue-500 text-white px-4 py-1 rounded">Edit</button>
        <button onClick={() => onDelete(doctor._id)} className="bg-red-500 text-white px-4 py-1 rounded">Delete</button>
      </div>
    </div>
  );
};

export default DoctorCard;
