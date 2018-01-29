import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
/*
const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment}) =>
  <li className="comment">
		<CommentText />
    {text} <span className="votesSection"> votes: {votes}</span>
    <div id = {id}>
    	<button onClick={() => removeComment(id)}>Remove</button> 
    	<button onClick={() => editComment('woloolo', id)}>Edycja</button>  
    	<button onClick={() => thumbUpComment(id)}>Thumb up</button> 
    	<button onClick={() => thumbDownComment(id)}> Thumb Down </button> 
  	</div>
  </li>;
*/

class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			inEdition: 'no'
		}
	}

	handleEdition(e) {
		e.preventDefault();
		this.setState({inEdition: 'yes'});
	}

	render() {
		if (this.state.inEdition === 'no'){
			return (
				<li className="comment">
    			{this.props.text} <span className="votesSection"> votes: {this.props.votes}</span>
    			<div id = {this.props.id}>
    				<button onClick={() => this.props.removeComment(this.props.id)}>Remove</button> 
    				<button onClick={(e) => this.handleEdition(e)}>Edycja</button>  
    				<button onClick={() => this.props.thumbUpComment(this.props.id)}>Thumb up</button> 
    				<button onClick={() => this.props.thumbDownComment(this.props.id)}> Thumb Down </button> 
  				</div>
				</li>
			);
		} else if (this.state.inEdition === 'yes') {
			
			return (
				<li className="comment">
					<form onSubmit={(e) => {
							e.preventDefault(); 
							this.props.editComment(e.target.commentText.value, this.props.id);
							 this.setState({inEdition: 'no'});
						}}>
				  	<input
						type = "text"
						name = "commentText"
						defaultValue = {this.props.text}
						/>
						<input type="submit" value="Submit" />
					</form>
				</li>
			);
		}
	}

}
export default Comment;

