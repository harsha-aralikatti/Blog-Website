import React from 'react';

export default function StatsCard({ title, value, icon: Icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm">{title}</p>
          <h3 className="text-3xl font-bold text-gray-700 mt-1">{value}</h3>
        </div>
        <div className="bg-purple-100 p-3 rounded-lg">
          <Icon className="w-8 h-8 text-purple-600" />
        </div>
      </div>
    </div>
  );
}