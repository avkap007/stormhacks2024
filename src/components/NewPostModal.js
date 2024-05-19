// src/components/NewPost.js
import React, { useState, useContext } from 'react';
import { PostContext } from './PostContext';
import { useNavigate } from 'react-router-dom';

function NewPost() {
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content) return;

    addPost({
      content,
      author: 'User1', // Example static user
      createdAt: new Date().toISOString(),
    });
    setContent('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        style={{ width: '100%', height: '100px' }}
      ></textarea>
      <button type="submit" style={{ marginTop: '10px' }}>Post</button>
    </form>
  );
}

export default NewPost;
