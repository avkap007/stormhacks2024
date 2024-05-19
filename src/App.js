import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import NewPost from './components/NewPost';
import { PostProvider } from './components/PostContext';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

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
const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
});

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
