import React, { useState } from 'react';
import {Link} from 'react-router';
import { User, BarChart3, Users, Settings, Calendar,BookOpen, Clock, Bell,Play,Upload, FileText,Plus,ArrowLeft
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Schedule from './components/Schedule';
import QuickActionsPanel from './components/QuickActionsPanel';




// Top Bar Component
const TopBar = () => {
  return (
    <div className="bg-white/40 backdrop-blur-sm border-b border-blue-100 px-8 py-4 ml-0 md:md:ml-64">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
          <p className="text-gray-600">Welcome back, Professor </p>
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

// Main Dashboard Component
const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/*  // Sidebar Component  */}
      <Sidebar />
      <div className="flex flex-col">
        <TopBar />
        <main className="md:ml-64 ml-0 p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
            
            {/* // Schedule Panel Component */}
            <div className="col-span-2">
              <Schedule />
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