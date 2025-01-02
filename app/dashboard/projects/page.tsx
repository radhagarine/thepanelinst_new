import React from 'react';


const ProjectsDashboard: React.FC = () => {
  // Sample project data - replace with your actual data

  return (
    <div className="p-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-white text-4xl font-bold mb-2">Projects</h1>
          <p className="text-gray-400">Here are your personal and company details</p>
        </div>
        <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
          Create New Project
        </button>
      </div>

      
    </div>
  );
};

export default ProjectsDashboard;