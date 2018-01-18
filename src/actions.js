import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}

function editComment(text, id) {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
} 

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id
	}
}

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}

export {ADD_COMMENT, REMOVE_COMMENT, THUMB_UP_COMMENT, THUMB_DOWN_COMMENT, EDIT_COMMENT, addComment, editComment, removeComment, thumbUpComment, thumbDownComment};



/*
export const boundAddComment = text => dispatch(addComment(text));
export const boundEditComment = (id, text) => dispatch(editComment(text, id));
export const boundRemoveComment = id => dispatch(removeComment(id));
export const boundThumbUpComment = id => dispatch(thumbUpComment(id));
export const boundThumbDownComment = id => dispatch(thumbDownComment(id));
*/