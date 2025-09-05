import React from 'react'
import { FileText, HatGlasses, HardDriveDownload, AirVent } from 'lucide-react';
import uploadedContent from '../DummyData/uploadedContent'
function CompactContent() {
  return (
    <div className='md:hidden block bg-white rounded-4xl shadow-2xl border-2 border-blue-700 shadow-black overflow-y-auto mb-6' style={{ maxHeight:'400px'}}>
             <div className='flex items-center mb-4 px-5 gap-2  bg-white h-20 sticky top-0 shadow-lg '>
              <div className='text-blue-600 '><AirVent /></div>
              <h2 className="flex items-center gap-4 h-12 p-2 border-gray-500 
            text-xl font-semibold text-gray-900 bg-blue-900/40 cursor-pointer hover:bg-blue-900/70   rounded-full">Uploaded Content</h2>
            </div>
            {uploadedContent.map((content) => (
                  <div key={content.id} className="border rounded-lg p-4 m-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start   mb-2">
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
                          <p>Download</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
  )
}

export default CompactContent