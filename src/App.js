// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import Maps from './components/Maps.js';
import { PostProvider } from './components/PostContext';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB34WTdf4N7FinXWzxf3h-zXLbzipNmQjk",
  authDomain: "sfu-stormhacks-2024.firebaseapp.com",
  projectId: "sfu-stormhacks-2024",
  storageBucket: "sfu-stormhacks-2024.appspot.com",
  messagingSenderId: "356402525327",
  appId: "1:356402525327:web:d5aa3a7c6437efc0346cfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// FAB component
function FloatingButton() {
  const navigate = useNavigate();

  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => navigate('/new-post')}
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
          <Route path="/" element={<PostList />} />
          <Route path="/new-post" element={<NewPost />} />
        </Routes>
        <FloatingButton />
      </PostProvider>
    </Router>
  );
}

export default App;
export { db };