// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import Maps from './components/Maps.js';
import { PostProvider } from './components/PostContext';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function FloatingButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/new-post');
  };

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={handleClick}
      style={{ position: 'fixed', bottom: 16, right: 16 }}
    >
      <AddIcon />
    </Fab>
  );
}

function App() {
  return (
    <Router>
      <PostProvider>
        <Routes>
          <Route path="/" element={<Maps />} />
          {/* <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<NewPost />} /> */}
        </Routes>
        {/* <FloatingButton /> */}
      </PostProvider>
    </Router>
  );
}

export default App;
