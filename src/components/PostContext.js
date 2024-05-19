// src/components/PostContext.js
import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts((prevPosts) => [{ ...post, votes: 0 }, ...prevPosts]);
  };

  const upvotePost = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => (i === index ? { ...post, votes: post.votes + 1 } : post))
    );
  };

  const downvotePost = (index) => {
    setPosts((prevPosts) =>
      prevPosts.map((post, i) => (i === index ? { ...post, votes: post.votes - 1 } : post))
    );
  };

  return (
    <PostContext.Provider value={{ posts, addPost, upvotePost, downvotePost }}>
      {children}
    </PostContext.Provider>
  );
};
