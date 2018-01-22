import React from 'react';
import ReactDOM from 'react-dom';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
  <li className="comment">
    {text} <span className="votesSection"> votes: {votes}</span>
    <div id = {id}>
    	<button onClick={() => removeComment(id)}>Remove</button> 
    	<button onClick={() => editComment('woloolo', id)}>Edycja</button>  
    	<button onClick={() => thumbUpComment(id)}>Thumb up</button> 
    	<button onClick={() => thumbDownComment(id)}> Thumb Down </button> 
  	</div>
  </li>;

export default Comment;

