import React from 'react';

const AddComment = ({addComment}) => 
	<form onSubmit={(e) => {
							e.preventDefault(); 
							addComment(e.target.commentText.value); 
						}}>
		<h1>Add something to the discussion!</h1>
		<input
			type = "text"
			name = "commentText"
			placeholder = "New Comment"
		/>
		<input type="submit" value="Submit" />
	</form>


export default AddComment