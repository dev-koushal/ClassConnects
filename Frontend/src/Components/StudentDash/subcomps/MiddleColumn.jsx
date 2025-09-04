import React from 'react'
import { FileText, HatGlasses, HardDriveDownload } from 'lucide-react';
import uploadedContent from '../DummyData/uploadedContent'
function MiddleColumn() {
  return (
    <div className="md:block hidden bg-white rounded-lg shadow-2xl shadow-black overflow-y-auto" style={{ maxHeight: '600px' }}>
              <div className="flex items-center mb-4 bg-white h-20 sticky top-0 shadow-lg">
                <FileText className="w-5 h-5 text-green-600 mr-2 ml-6" />
                <h2 className="text-xl font-semibold text-gray-900  bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100 p-2  rounded-full border-gray-500 
        bg-[#80808030] ">Uploaded Content</h2>
              </div>
              
              <div className="space-y-4  p-6 ">
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
  )
}

export default MiddleColumn