import React from 'react';
import Doctors from './pages/Doctors';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Tectra Clinic - Doctors Management</h1>
      <Doctors />
    </div>
  );
}

export default App;
