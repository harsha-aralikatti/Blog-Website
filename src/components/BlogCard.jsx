import React from 'react';
import { Heart, MessageCircle, Eye } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {post.image && (
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between text-gray-500">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 hover:text-red-500 transition">
              <Heart size={18} />
              <span>{post.likes}</span>
            </button>
            <div className="flex items-center gap-1">
              <MessageCircle size={18} />
              <span>{post.comments}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={18} />
              <span>{post.views}</span>
            </div>
          </div>
          <span className="text-sm">{post.date}</span>
        </div>
      </div>
    </div>
  );
}