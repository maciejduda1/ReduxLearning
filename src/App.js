import React from 'react';
import './App.css';
import CommentsList from './CommentsListContainer.js';
import AddComment from './AddCommentContainer.js'

const App = () => {
  return (
    <div className="App">
      <AddComment />
      <h1>Comments List:</h1>
      <h2>topic: Best Football team!</h2>
      <CommentsList />
    </div>
  );
};

export default App;
