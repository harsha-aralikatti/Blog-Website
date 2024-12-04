import React from 'react';
import { FileText, ThumbsUp, Users, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import StatsCard from '../components/StatsCard';
import BlogCard from '../components/BlogCard';

const mockStats = [
  { title: 'Total Posts', value: '124', icon: FileText },
  { title: 'Total Likes', value: '8.4K', icon: ThumbsUp },
  { title: 'Active Users', value: '1.2K', icon: Users },
];

const mockTrendingPosts = [
  {
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    likes: 234,
    comments: 56,
    views: 1200,
    date: '2h ago'
  },
  // Add more mock posts as needed
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {mockStats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <section className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-800">Trending Posts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockTrendingPosts.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}