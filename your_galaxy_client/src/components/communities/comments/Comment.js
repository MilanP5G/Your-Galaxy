import React, { Component } from 'react'
import { deleteComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'


class Comment extends Component {

  render() {
    const { comment } = this.props;

    return (
      <div className='commentCard'>
          <p>{comment.content}</p>
          <br></br>
          <div className="dlte-comment-button">
           <button onClick={() => this.props.deleteComment(comment)} className='deleteComment'> Delete </button>
          </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deleteComment: comment => dispatch(deleteComment(comment))}
}


export default connect(null, mapDispatchToProps)(Comment)
