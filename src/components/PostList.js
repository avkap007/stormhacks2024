import React, { useContext } from 'react';
import { PostContext } from './PostContext';

function PostList() {
  const { posts } = useContext(PostContext);

  console.log(posts); // Add this line to see the posts in the console

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
