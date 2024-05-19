// src/components/PostList.js
import React, { useContext } from 'react';
import { PostContext } from './PostContext';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function PostList() {
  const { posts, upvotePost, downvotePost } = useContext(PostContext);
  const navigate = useNavigate();

  const handleNewPost = () => {
    navigate('/new-post');
  };

  return (
    <div style={styles.postListContainer}>
      {posts.map((post, index) => (
        <div key={post.createdAt} style={styles.postContainer}>
          <div style={styles.postContent}>
            <h3>{post.content}</h3>
            <span>Posted by {post.author} at {new Date(post.createdAt).toLocaleString()}</span>
          </div>
          <div style={styles.voteContainer}>
            <span style={styles.voteButton} onClick={() => upvotePost(index)}>&#9650;</span>
            <span style={styles.voteCount}>{post.votes}</span>
            <span style={styles.voteButton} onClick={() => downvotePost(index)}>&#9660;</span>
          </div>
        </div>
      ))}
      <Fab
        color="primary"
        aria-label="add"
        onClick={handleNewPost}
        style={styles.fab}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

const styles = {
  postListContainer: {
    width: '80%',
    margin: '0 auto',
    paddingBottom: '80px', // Ensure space for the floating button
  },
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    position: 'relative',
  },
  postContent: {
    flex: 1,
    paddingBottom: '40px', // Ensure space at the bottom for the vote container
  },
  voteContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
  voteButton: {
    cursor: 'pointer',
    fontSize: '20px',
    userSelect: 'none',
    padding: '5px',
  },
  voteCount: {
    margin: '0 5px',
  },
  fab: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
  },
};

export default PostList;
