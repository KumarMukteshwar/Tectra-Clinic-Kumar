import axios from 'axios';

const API = 'http://localhost:5000/api/doctors';

export const getDoctors = async () => {
  const res = await axios.get(`${API}/get-doctor`);
  return res.data;
};

export const createDoctor = async (doctor) => {
  const res = await axios.post(`${API}/create-doctor`, doctor);
  return res.data;
};

export const updateDoctor = async (id, doctor) => {
  const res = await axios.put(`${API}/update-doctor/${id}`, doctor);
  return res.data;
};

export const deleteDoctor = async (id) => {
  const res = await axios.delete(`${API}/delete-docto/${id}`);
  return res.data;
};
