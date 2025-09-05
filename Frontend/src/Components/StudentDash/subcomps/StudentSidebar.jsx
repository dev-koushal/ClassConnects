import {BarChart3, BookOpen, Calendar, Settings, User, Users} from 'lucide-react'
const StudentSidebar = () => {
  const menuItems = [
    { icon: User, label: 'Profile', active: false },
    { icon: BarChart3, label: 'Analytics', active: false },
    { icon: Users, label: 'Attendance', active: false },
    { icon: Calendar, label: 'Schedule', active: true },
    { icon: BookOpen, label: 'Courses', active: false },
    { icon: Settings, label: 'Settings', active: false }
  ];

  return (
  <>
      <div className="p-6 border-b border-blue-500/20">
        <h2 className="text-white text-2xl font-bold text-center">Students</h2>
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
      </>
  );
};
export default StudentSidebar;