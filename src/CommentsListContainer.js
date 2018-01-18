import {connect} from 'react-redux';
import CommentList from './CommentsList';

const mapStateToProps = state => ({
	comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);