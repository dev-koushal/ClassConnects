import { FileText, Play, Plus, Upload } from "lucide-react";

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
function QuickActionsPanel () {
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

export default QuickActionsPanel;