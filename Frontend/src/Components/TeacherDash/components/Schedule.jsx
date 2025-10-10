import { Calendar, Clock } from 'lucide-react';
import React, { useState } from 'react'



function Schedule() {
  const [filter, setFilter] = useState('all');
  
  const scheduleData = [
    {
      subject: "Advanced Mathematics",
      date: "Today, Sep 5",
      time: "10:00 AM - 11:30 AM",
      status: "Live",
      type: "class"
    },
    {
      subject: "Physics Laboratory",
      date: "Today, Sep 5",
      time: "2:00 PM - 4:00 PM",
      status: "Scheduled",
      type: "lab"
    },
    {
      subject: "Chemistry Basics",
      date: "Yesterday, Sep 4",
      time: "9:00 AM - 10:30 AM",
      status: "Completed",
      type: "class"
    }
  ];

  return (
   <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Schedule</h2>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="all">All Classes</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="live">Live Sessions</option>
        </select>
      </div>
      
      <div className="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto">
        {scheduleData.map((item, index) => (
          <ScheduleCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Schedule



export const ScheduleCard = ({ subject, date, time, status, type }) => {
  const statuss = 'Scheduled';
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200';
      case {statuss}: return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Completed': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group cursor-pointer">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform"></div>
          <h3 className="font-semibold text-gray-800 text-lg">{subject}</h3>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm">{time}</span>
        </div>
      </div>
      
      {status === 'Live' && (
        <div className="mt-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition-colors duration-200">
            Join Session
          </button>
        </div>
      )}
    </div>
  );
};




