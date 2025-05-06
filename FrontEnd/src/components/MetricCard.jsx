import React from 'react'

export default function MetricCard({ title, value, percent, trend }) {
  const arrow = trend === 'up' ? '↑' : '↓'
  const color = trend === 'up' ? 'text-green-600' : 'text-red-600'

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col">
      <span className="text-sm text-gray-500">{title}</span>
      <div className="flex items-center justify-between mt-2">
        <h3 className="text-2xl font-semibold">{value}</h3>
        <span className={`${color} text-sm flex items-center`}>
          {percent}% {arrow}
        </span>
      </div>
    </div>
  )
}
