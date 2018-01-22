import {connect} from 'react-redux';
import AddComment from './AddComment.js';
import { addComment } from './actions.js';

const mapDispatchToProps = dispatch => ({
  addComment: (text) => dispatch(addComment(text))
});

export default connect(null, mapDispatchToProps)(AddComment);