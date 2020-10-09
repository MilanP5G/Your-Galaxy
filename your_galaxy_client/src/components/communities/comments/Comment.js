import React, { Component } from 'react'
import { deleteComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'
import { fetchComments } from '../../../actions/CommentAction'
import { connect } from 'react-router-dom'


class Comment extends Component {

  render() {
    const { comment } = this.props;

    return (
      <div className='postCard'>
          <p>{comment.content}</p>
          <br></br>
          <button onClick={() => this.props.deleteComment(post)}> Delete </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deletePost: post => dispatch(deletePost(post))}
}


export default connect(null, mapDispatchToProps, { fetchComments })(Post)
