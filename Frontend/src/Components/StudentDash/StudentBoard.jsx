import React, { useState } from 'react';
import { Clock, FileText, MessageCircle, Users, Calendar, Download, Eye, X, Send, User, HatGlasses, HardDriveDownload } from 'lucide-react';
import scheduledClasses from './DummyData/scheduledClasses' 
import uploadedContent from './DummyData/uploadedContent'
import discussions from './DummyData/discussions'
const StudentBoard = () => {
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);
  const [newMessage, setNewMessage] = useState('');

  
  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'bg-red-100 text-red-800 border-red-200';
      case 'upcoming': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message to a backend
      console.log('Sending message:', newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="min-h-screen bg-(--Secondary) p-4 ">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold  text-gray-900">Student Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening today.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Scheduled Classes */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 shadow-2xl shadow-black">
              <div className="flex items-center mb-4">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Scheduled Classes</h2>
              </div>
              
              <div className="space-y-4">
                {scheduledClasses.map((classItem) => (
                  <div key={classItem.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{classItem.topic}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(classItem.status)}`}>
                        {classItem.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {classItem.time}
                      </div>
                      <div>{classItem.date}</div>
                      <div className="font-medium">{classItem.instructor}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Middle Column - Uploaded Content */}
          <div className="lg:col-span-1">
            <div className="md:block hidden bg-white rounded-lg shadow-2xl shadow-black p-6 overflow-y-auto" style={{ maxHeight: '600px' }}>
              <div className="flex items-center mb-4">
                <FileText className="w-5 h-5 text-green-600 mr-2" />
                <h2 className="text-xl font-semibold text-gray-900">Uploaded Content</h2>
              </div>
              
              <div className="space-y-4">
                {uploadedContent.map((content) => (
                  <div key={content.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{content.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        content.type === 'PDF' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {content.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <HatGlasses size={36} strokeWidth={1.75} />
                          </button>
                          <p>View pdf</p>
                          <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                           <HardDriveDownload size={36} strokeWidth={1.75} />
                          </button>
                          <p>View pdf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* compact uploaded section for phones */}
          <div className='md:hidden block bg-white rounded-lg shadow-2xl shadow-black p-6 overflow-y-auto mb-6' style={{ maxHeight: '200px' }}>
             <h2 className="text-xl h-12 sticky top-0 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100  rounded-full p-2 border-gray-500 
        bg-[#80808030] font-semibold text-gray-900">Uploaded Content</h2>
            {uploadedContent.map((content) => (
                  <div key={content.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{content.title}</h3>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        content.type === 'PDF' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {content.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-gray-500 hover:text-blue-600 transition-colors">
                            <HatGlasses size={36} strokeWidth={1.75} />
                          </button>
                          <p>View pdf</p>
                          <button className="p-1 text-gray-500 hover:text-green-600 transition-colors">
                           <HardDriveDownload size={36} strokeWidth={1.75} />
                          </button>
                          <p>View pdf</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Right Column - Discussion Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-2xl shadow-black p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 text-purple-600 mr-2" />
                  <h2 className="text-xl font-semibold text-gray-900">Discussion</h2>
                </div>
                <button
                  onClick={() => setIsDiscussionOpen(true)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors text-sm"
                >
                  Open Full
                </button>
              </div>
              
              {/* Compact Discussion View */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {discussions.slice(0, 3).map((discussion) => (
                  <div key={discussion.id} className="border-b pb-3 last:border-b-0">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-sm text-gray-900">{discussion.user}</span>
                          <span className="text-xs text-gray-500">{discussion.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">{discussion.message}</p>
                        <span className="text-xs text-gray-500 mt-1">{discussion.replies} replies</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setIsDiscussionOpen(true)}
                className="w-full mt-4 text-purple-600 hover:text-purple-800 text-sm font-medium"
              >
                View all discussions →
              </button>
            </div>
          </div>
          <div className="space-y-3 max-h-full overflow-y-auto bg-green-100 rounded-lg p-6 shadow-2xl shadow-black">
                             
        </div>
        </div>
      </div>
      

      {/* Full Discussion Popup */}
      {isDiscussionOpen && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-2" />
                <h2 className="text-2xl font-semibold text-gray-900">Class Discussion</h2>
              </div>
              <button
                onClick={() => setIsDiscussionOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Discussion Messages */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div key={discussion.id} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-900">{discussion.user}</span>
                          <span className="text-sm text-gray-500">{discussion.time}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{discussion.message}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="hover:text-purple-600 transition-colors">
                            Reply
                          </button>
                          <span>{discussion.replies} replies</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Message Input */}
            <div className="border-t p-6">
              <div className="flex space-x-4">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentBoard ;