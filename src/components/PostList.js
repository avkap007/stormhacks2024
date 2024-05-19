// src/components/PostList.js
import React, { useContext } from 'react';
import { PostContext } from './PostContext';

function PostList() {
  const { posts } = useContext(PostContext);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.createdAt}>
          <h3>{post.content}</h3>
          <span>Posted by {post.author} at {new Date(post.createdAt).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
}

export default PostList;
