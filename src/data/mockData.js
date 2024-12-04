import { FileText, ThumbsUp, Users, Building2, Briefcase, ListChecks, Phone } from 'lucide-react';

export const mockStats = [
  { title: 'Total Posts', value: '124', icon: FileText },
  { title: 'Total Likes', value: '8.4K', icon: ThumbsUp },
  { title: 'Active Users', value: '1.2K', icon: Users },
];

export const mockPosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    excerpt: 'Learn the basics of React and start building modern web applications...',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80',
    likes: 234,
    comments: 56,
    views: 1200,
    date: '2h ago'
  },
  {
    id: '2',
    title: 'The Future of Web Development',
    excerpt: 'Exploring the latest trends and technologies in web development...',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80',
    likes: 324,
    comments: 89,
    views: 2100,
    date: '1d ago'
  }
];

export const categories = [
  { id: '1', title: 'Company Profile', icon: Building2 },
  { id: '2', title: 'Services', icon: Briefcase },
  { id: '3', title: 'The Team', icon: Users },
  { id: '4', title: 'Listings', icon: ListChecks },
  { id: '5', title: 'The Blog', icon: FileText },
  { id: '6', title: 'Contact Us', icon: Phone },
];