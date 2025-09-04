import React from 'react'
import { FileText, HatGlasses, HardDriveDownload, AirVent } from 'lucide-react';
import uploadedContent from '../DummyData/uploadedContent'
function CompactContent() {
  return (
    <div className='md:hidden block bg-white rounded-lg shadow-2xl shadow-black p-6 overflow-y-auto mb-6' style={{ maxHeight: '400px' }}>
             <h2 className="text-xl flex items-center gap-4 h-12 sticky top-0 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100  rounded-full p-2 border-gray-500 
        bg-[#80808030] font-semibold text-gray-900"><span className='text-purple-600'><AirVent /></span>Uploaded Content</h2>
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
  )
}

export default CompactContent