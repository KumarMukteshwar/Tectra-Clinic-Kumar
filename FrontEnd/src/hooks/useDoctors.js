import { useEffect, useState } from 'react'
import {
  getDoctors,
  deleteDoctor as delDoc,
} from '../services/doctorService'

export function useDoctors() {
  const [doctors, setDoctors] = useState([])

  const fetch = async () => {
    let data = await getDoctors()
    // if your API is empty, fallback to dummy 4 rows:
    if (!data.length) {
      data = Array(4).fill({
        _id: Math.random().toString(),
        name: 'Dr. Amit Mishra',
        specialty: 'Heart Surgeon',
        dob: '14th Jan,1992',
        email: 'amitmishra@gmail.com',
        status: 'Active',
        contact: '+91 9999999999',
        avatar: 'https://i.pravatar.cc/150?img=12',
      })
    }
    setDoctors(data)
  }

  useEffect(() => {
    fetch()
  }, [])

  const deleteDoctor = async (id) => {
    await delDoc(id)
    fetch()
  }

  return { doctors, deleteDoctor, setEdit: () => {}, edit: null }
}
