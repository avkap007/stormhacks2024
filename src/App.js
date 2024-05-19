import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import { PostProvider } from './components/PostContext';

function App() {
  return (
    <Router>
      <PostProvider>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
      </PostProvider>
    </Router>
  );
}

export default App;
