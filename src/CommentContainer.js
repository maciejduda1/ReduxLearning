import {connect} from 'react-redux';
import Comment from './Comment';
//import { thumbUpComment, thumbDownComment, removeComment, editComment } from './index.js'
import { thumbUpComment, thumbDownComment, removeComment, editComment, addComment } from './actions.js';

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (text, id) => dispatch(editComment(text,id)),
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(Comment);