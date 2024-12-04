import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Image, Video, Send } from 'lucide-react';

export default function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Create New Post</h1>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter post title..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={8}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Write your post content..."
              />
            </div>

            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Image size={20} />
                Add Image
              </button>
              <button className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
                <Video size={20} />
                Add Video
              </button>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition">
              <Send size={20} />
              Publish Post
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}