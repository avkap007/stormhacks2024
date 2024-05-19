// src/components/NewPost.js
import React, { useState, useContext } from 'react';
import { PostContext } from './PostContext';

function NewPost() {
  console.log('NewPost component rendered'); // Add this line
  const [content, setContent] = useState('');
  const { addPost } = useContext(PostContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!content) return;

    addPost({
      content,
      author: 'User1', // Example static user
      createdAt: new Date().toISOString(),
    });
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button type="submit">Post</button>
    </form>
  );
}

export default NewPost;
