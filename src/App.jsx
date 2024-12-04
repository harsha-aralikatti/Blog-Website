import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import NewPost from './pages/NewPost';
import UserHome from './pages/UserHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/new-post" element={<NewPost />} />
        <Route path="/" element={<UserHome />} />
      </Routes>
    </Router>
  );
}

export default App;