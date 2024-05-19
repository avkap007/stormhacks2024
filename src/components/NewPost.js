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
    <form style={{justifyContent: "right"}}onSubmit={handleSubmit}>
      <textarea style={{border: "3px solid #000", borderRadius: "60px", align: "left", width: "95%", padding: "30px", fontSize: "20px"}}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <select style={{alignSelf: "right", border: "1px solid #AAA",  borderRadius: "2px",  boxShadow: "0px 1px 3px rgba(0, 0, 0, 0.1)",  color: "#555",  fontSize: "inherit",  margin: "0",  overflow: "hidden",  paddingTop: "2px",  paddingBottom: "2px",  textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
        <option value="someOption">Anonymous</option>
        <option value="otherOption">Show Username</option>
      </select>
      <button style={{alignSelf: "right", backgroundColor: "#333", color: "#fff", border: "none", padding: "10px 20px", borderRadius: "4px", fontSize: "16px", cursor: "pointer"}} type="submit">Post</button>
    </form>
  );
}

export default NewPost;
