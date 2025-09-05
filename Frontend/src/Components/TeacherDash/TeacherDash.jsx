import React, { useState } from 'react';
import { 
  User, 
  BarChart3, 
  Users, 
  Settings, 
  Calendar, 
  BookOpen, 
  Clock, 
  Bell,
  Play,
  Upload,
  FileText,
  Plus
} from 'lucide-react';

// Sidebar Component
const Sidebar = () => {
  const menuItems = [
    { icon: User, label: 'Profile', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Users, label: 'Attendance', active: false },
    { icon: Calendar, label: 'Schedule', active: true },
    { icon: BookOpen, label: 'Courses', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
    <div className="w-64 hidden md:block bg-gradient-to-b from-blue-600 to-blue-700 h-screen fixed left-0 top-0 shadow-xl z-50">
      <div className="p-6 border-b border-blue-500/20">
        <h2 className="text-white text-2xl font-bold text-center">TeacherHub</h2>
      </div>
      
      <nav className="mt-6 ">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a 
                href="#" 
                className={`flex items-center px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 hover:translate-x-1 transition-all duration-300 group ${
                  item.active ? 'bg-white/10 text-white border-r-4 border-blue-300' : ''
                }`}
              >
                <item.icon className="w-5 h-5 mr-3 group-hover:text-blue-200 transition-colors" />
                <span className="font-medium">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

// Top Bar Component
const TopBar = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 px-8 py-4 ml-0 md:md:ml-64 ml-0">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Professor Smith</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all duration-200">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Schedule Card Component
const ScheduleCard = ({ subject, date, time, status, type }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-100 text-green-800 border-green-200';
      case 'Scheduled': return 'bg-blue-100 text-blue-800 border-blue-200';
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

// Quick Action Button Component
const QuickActionButton = ({ icon: Icon, title, description, color = "blue", onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 hover:border-${color}-200 transition-all duration-300 group w-full h-full min-h-[140px] flex flex-col items-center justify-center text-center`}
    >
      <div className={`w-12 h-12 bg-${color}-100 rounded-xl flex items-center justify-center mb-3 group-hover:bg-${color}-500 group-hover:scale-110 transition-all duration-300`}>
        <Icon className={`w-6 h-6 text-${color}-600  transition-colors duration-300`} />
      </div>
      <h3 className="font-semibold text-gray-800 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 group-hover:text-gray-700">{description}</p>
    </button>
  );
};

// Schedule Panel Component
const SchedulePanel = () => {
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
    },
    {
      subject: "Biology Seminar",
      date: "Tomorrow, Sep 6",
      time: "11:00 AM - 12:00 PM",
      status: "Scheduled",
      type: "seminar"
    },
    {
      subject: "Math Tutorial",
      date: "Tomorrow, Sep 7",
      time: "3:00 PM - 4:00 PM",
      status: "Scheduled",
      type: "tutorial"
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
  );
};

// Quick Actions Panel Component
const QuickActionsPanel = () => {
  const actions = [
    {
      icon: Plus,
      title: "Schedule Class",
      description: "Create new class",
      color: "blue",
      onClick: () => console.log("Schedule Class clicked")
    },
    {
      icon: Play,
      title: "Start Class",
      description: "Begin live session",
      color: "green",
      onClick: () => console.log("Start Class clicked")
    },
    {
      icon: Upload,
      title: "Upload Content",
      description: "Add materials",
      onClick: () => console.log("Upload Content clicked")
    },
    {
      icon: FileText,
      title: "Create Exam",
      description: "Design test/quiz",
      onClick: () => console.log("Create Exam clicked")
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4 h-[calc(100%-60px)]">
        {actions.map((action, index) => (
          <QuickActionButton key={index} {...action} />
        ))}
      </div>
    </div>
  );
};

// Main Dashboard Component
const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Sidebar />
      <div className="flex flex-col">
        <TopBar />
        <main className="md:ml-64 ml-0 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 h-[calc(100vh-140px)]">
            <div className="col-span-2">
              <SchedulePanel />
            </div>
            <div className="col-span-2">
              <QuickActionsPanel />
            </div>
            <div className="col-span-4">
              <div className=" rounded-2xl p-6 shadow-sm border border-gray-100 h-full">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Discussion Section</h2>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;