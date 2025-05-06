import React from 'react'
import Sidebar from '../components/Sidebar'
import MetricCard from '../components/MetricCard'
import CashflowChart from '../components/CashflowChart'
import ExpensesChart from '../components/ExpensesChart'
import DoctorsManagement from '../components/DoctorsManagement'

export default function Dashboard() {
  // These values come straight from your image:
  const metrics = [
    { title: 'Total Visitors',   value: '42,946', percent: 36, trend: 'up' },
    { title: 'Paid Visitors',    value: '7,929',  percent: 26, trend: 'up' },
    { title: 'Total Appointments', value: '4,199', percent: 26, trend: 'up' },
    { title: 'New Patients',     value: '1,647',  percent: 26, trend: 'up' },
  ]

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-6 space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-4 gap-6">
          {metrics.map((m) => (
            <MetricCard
              key={m.title}
              title={m.title}
              value={m.value}
              percent={m.percent}
              trend={m.trend}
            />
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-2 gap-6">
          <CashflowChart />  
          <ExpensesChart />
          {/* You could add a 3rd chart here */}
        </div>

        {/* Doctors Management Section */}
        <section>
          <DoctorsManagement />
        </section>
      </main>
    </div>
  )
}
