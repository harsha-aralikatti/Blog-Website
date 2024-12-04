import React from 'react';
import { Building2, Briefcase, Users, ListChecks, FileText, Phone, Heart } from 'lucide-react';
import BlogCard from '../components/BlogCard';

const categories = [
  { title: 'Company Profile', icon: Building2 },
  { title: 'Services', icon: Briefcase },
  { title: 'The Team', icon: Users },
  { title: 'Listings', icon: ListChecks },
  { title: 'The Blog', icon: FileText },
  { title: 'Contact Us', icon: Phone },
];

const mockPosts = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies in web development...',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    likes: 324,
    comments: 89,
    views: 2100,
    date: '1d ago'
  },
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies in web development...',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    likes: 324,
    comments: 89,
    views: 2100,
    date: '1d ago'
  },{
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies in web development...',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    likes: 324,
    comments: 89,
    views: 2100,
    date: '1d ago'
  },
  // Add more mock posts
];

export default function UserHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="bg-gradient-to-r from-purple-700 to-pink-600 text-white py-6">
        <div className="container mx-auto px-4">
          <a href="/admin"><h1 className="text-3xl font-bold mb-2">Welcome to BlogSpace</h1>
         </a> <p className="text-purple-100">Discover amazing stories and insights</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center text-center">
                <category.icon className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="text-gray-800 font-medium">{category.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Most Liked Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}