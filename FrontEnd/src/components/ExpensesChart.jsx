import React from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

const data = [
  { name: 'Rental Cost', value: 888240 },
  { name: 'Wages', value: 619000 },
  { name: 'Supplies', value: 467000 },
]
const COLORS = ['#C4B5FD', '#A7F3D0', '#FDE68A']

export default function ExpensesChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium">Expenses</h4>
        <select className="text-sm border rounded px-2 py-1">
          <option>Last 12 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((_, idx) => (
              <Cell key={idx} fill={COLORS[idx]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className="mt-2 text-center text-gray-600">
        <span className="font-semibold">₹18,22,240</span>
      </p>
      <ul className="mt-2 text-sm text-gray-600 space-y-1">
        {data.map((d, i) => (
          <li key={i} className="flex justify-between">
            <span>{d.name}</span>
            <span>₹{d.value.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
