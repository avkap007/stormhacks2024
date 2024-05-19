// src/components/PostList.js
import React, { useContext } from 'react';
import { PostContext } from './PostContext';
import { doc, setDoc, getDoc, collection, addDoc, updateDoc } from "firebase/firestore";
import { db } from '../App.js';

async function createUser (userId, username) {
  await setDoc(doc(db, "users", userId), {
    username,
    createdAt: new Date().toISOString(),
    lastLogin: new Date().toISOString()
  });
};

async function createPost (userId, text) {
  await addDoc(collection(db, "posts"), {
    userId,
    text,
    createdAt: new Date().toISOString(),
    upvotes: 0,
    downvotes: 0
  });
};
async function voteOnPost(postId, userId, voteType) {
  await createVote(postId, userId, voteType);
  await updateVoteCount(postId, voteType);
}

// Create a new vote in the database
async function createVote(postId, userId, voteType) {
  const voteRef = doc(db, `posts/${postId}/votes`, userId);
  const voteSnap = await getDoc(voteRef); // Get vote document

  // If vote exists, do not allow overriding
  if (voteSnap.exists()) {
    throw new Error("Vote already exists for this post and user");
  }

  // Add new vote document
  await setDoc(voteRef, {
    userId,
    voteType,
    createdAt: new Date().toISOString(),
  });
}

// Update vote count in the database
async function updateVoteCount(postId, voteType) {
  const postRef = doc(db, "posts", postId);
  const postSnap = await getDoc(postRef); // Get post document

  // If post exists, update vote count
  if (postSnap.exists()) {
    const post = postSnap.data();

    // Update vote count based on vote type
    if (voteType === "upvote") {
      await updateDoc(postRef, { upvotes: post.upvotes + 1 });
    } else if (voteType === "downvote") {
      await updateDoc(postRef, { downvotes: post.downvotes + 1 });
    } else {
      throw new Error("Invalid vote type: \"" + voteType + "\"");
    }
  }
}

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
