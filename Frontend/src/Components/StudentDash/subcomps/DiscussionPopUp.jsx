import { Mars, Send, Users, X } from 'lucide-react'
import React from 'react'
import discussions from '../DummyData/discussions'
function DiscussionPopUp({setIsDiscussionOpen, discussions}) {


  return (
    <div>
        <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg w-full max-w-4xl h-5/6 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center">
                <Users className="w-6 h-6 text-blue-600 mr-2" />
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
                       {discussion?.image && <img src={discussion.image} alt="modiji" />}
                        <Mars size={36} strokeWidth={1.75} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <span className="font-medium text-gray-900">{discussion.user}</span>
                        </div>
                        <p className="text-gray-700 mb-2">{discussion.message}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="hover:text-blue-600 transition-colors">
                            Reply to this mf
                          </button>
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
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default DiscussionPopUp