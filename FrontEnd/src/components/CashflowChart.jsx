import React from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts'

const data = [
  { month: 'Jan', income: 2.5 },
  { month: 'Feb', income: 1.5 },
  { month: 'Mar', income: 2.0 },
  { month: 'Apr', income: 4.19 },
  { month: 'May', income: 3.5 },
  { month: 'Jun', income: 2.0 },
  { month: 'Jul', income: 2.8 },
  { month: 'Aug', income: 3.6 },
  { month: 'Sep', income: 3.4 },
  { month: 'Oct', income: 3.9 },
  { month: 'Nov', income: 3.2 },
  { month: 'Dec', income: 2.7 },
]

export default function CashflowChart() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-lg font-medium">Cashflow</h4>
        <select className="text-sm border rounded px-2 py-1">
          <option>Last 12 Months</option>
        </select>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <XAxis dataKey="month" />
          <Tooltip formatter={(val) => [`₹${(val * 100000).toLocaleString()}`, 'Income']} />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 4, stroke: '#4F46E5', fill: '#fff' }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-2 text-gray-600">
        Total <span className="font-semibold">44,10,840</span>
      </p>
    </div>
  )
}
