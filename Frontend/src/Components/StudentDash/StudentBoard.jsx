import React, { useState , lazy} from 'react';
import { Clock, FileText, MessageCircle, Users, Calendar, Download, Eye, X, Send, User, HatGlasses, HardDriveDownload, ArrowLeft, Mars, UserRoundPen } from 'lucide-react';
import {Link} from 'react-router'
import scheduledClasses from './DummyData/scheduledClasses' 
import CompactContent from './subcomps/CompactContent';
import discussions from './DummyData/discussions'
import MiddleColumn from './subcomps/MiddleColumn';
import DownloadedContent from './subcomps/DownloadedContent';
import StudentSidebar from './subcomps/StudentSidebar'
const DiscussionPopUp = lazy(() => import('./subcomps/DiscussionPopUp'));
import BannerImage from './assets/bannerpng.png';


const StudentBoard = () => {
  const [isDiscussionOpen, setIsDiscussionOpen] = useState(false);
  const [sizeSchedule,setSizeSchedule] = useState("400");
 
   const setSize = ()=>{
    if(sizeSchedule == "300"){
       setSizeSchedule("600");
    }else{
      setSizeSchedule("300");
    }
   }
  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return 'px-6 bg-red-100 text-red-800 border-red-200';
      case 'upcoming': return 'px-2 bg-blue-100 text-blue-800 border-blue-200';
      case 'scheduled': return 'px-2 bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed': return 'px-2 bg-green-100 text-green-800 border-green-200';
      default: return 'px-2 bg-gray-100 text-gray-800 border-gray-200';
    }
  };


  return (
    <div className="min-h-screen bg-white p-4 ">
        <div>
            <Link to="/" className="text-(--primary) text-lg hover:underline flex items-center gap-2 mb-4">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
            </Link>
        </div>
      <div className="max-w-full col-span-2  mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
          
          
          {/* SIdebar */}
          <div className='lg:row-span-3 col-span-1 max-h-full  hidden lg:block bg-blue-900 rounded-4xl'>
            <StudentSidebar />
          </div>
          
          
           <div className="mb-8 md:col-span-5">
         <div className='flex overflow-hidden justify-between items-center bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-100 backdrop-contrast-100  rounded-4xl p-4 md:p-20 border-gray-500 
         bg-blue-900 '>
           <div className='flex flex-col'>
            <h1 className="text-3xl font-bold  text-white font-mono ">Student Dashboard  </h1>
           <p className="text-white/60 mt-2 block">Welcome back! Here's what's happening today.</p>
           </div>
        <div className=' max-w-80 max-h-30 -mt-28 hidden md:block'> <img src={BannerImage} alt="bannerImage" /></div>
         </div>
        </div>
         
          {/* Left Column - Scheduled Classes */}
          <div className="lg:col-span-3 ">
            <div className="relative bg-white border-2 border-blue-700 rounded-4xl shadow-[1px_1px_25px_1px_gray] overflow-auto" style={ {maxHeight:`${sizeSchedule}px`} }>
              <div className="flex  items-center mb-4 bg-white sticky h-20 top-0 shadow-lg z-10 ">
                <Calendar className="w-5 h-5 text-blue-600 mr-2 ml-6" />
                <h2 onClick={()=>setSize()} className="text-xl font-semibold text-gray-900 rounded-full p-2 border-gray-500 bg-blue-900/40 cursor-pointer hover:bg-blue-900/70 ">Scheduled Classes</h2>
              </div>
              
              <div className="space-y-4 p-6">
                {scheduledClasses.map((classItem) => (
                  <div key={classItem.id} className="border rounded-lg p-4 hover:shadow-xl shadow-black/40 hover:scale-[1.01] transition-shadow ease-in duration-300">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-900">{classItem.topic}</h3>
                      <span className={` py-1 text-xs rounded-full border ${getStatusColor(classItem.status)}`}>
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
          <div className="lg:col-span-2">
           <MiddleColumn setSize={sizeSchedule} setSizeSchedule={setSizeSchedule} />
          </div>
          {/* compact uploaded section for phones */}
          <CompactContent />

          {/* Right Column - Discussion Section */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-4xl overflow-hidden shadow-[1px_1px_25px_1px_gray] border-2 border-blue-700 ">
              <div className="flex items-center justify-between bg-white h-20 sticky top-0 shadow-lg">
                <div className="flex items-center ">
                  <MessageCircle className="w-5 h-5 text-blue-600 mr-2 ml-6" />
                  <h2 className="text-xl font-semibold text-gray-900 bg-blue-900/40 cursor-pointer hover:bg-blue-900/70  rounded-full p-2 px-4  ">Discussion</h2>
                </div>
              </div>
              
              {/* Compact Discussion View */}
              <div className="space-y-3 max-h-64  p-6 overflow-y-auto ">
                {discussions.slice(0, 4).map((discussion) => (
                  <div key={discussion.id} className="border-b pb-3 last:border-b-0">
                    <div className="flex items-start gap-4 hover:shadow-xl shadow-black/40 hover:scale-[1.01] transition-shadow ease-in duration-300 hover:rounded-2xl">
                     <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden flex items-center justify-center ">
                        {discussion?.image && <img src={discussion.image} alt="modiji" />}
                        <Mars size={36} strokeWidth={1.75} />
                    </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <span className="font-medium text-sm text-gray-900">{discussion.user}</span>
                          <span className="text-xs text-gray-500">{discussion.time}</span>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-2">{discussion.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => setIsDiscussionOpen(true)}
                className="w-full shadow-[0_-2px_5px_0_gray] mt-4 rounded-full bg-blue-200 p-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                View all discussions →
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Full Discussion Popup */}
      {isDiscussionOpen && <DiscussionPopUp setIsDiscussionOpen={setIsDiscussionOpen} discussions={discussions} />}
    </div>
  );
};

export default StudentBoard ;

