import React, { Component } from 'react'
import { deletePost } from '../../../actions/PostAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Post extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className='postCard'>
          <h1>{post.title}</h1>
          <br></br>
          {post.content}
          <br></br>
          <Link to={`/posts/${post.id}`} className='comment-on-post'>
            <button>Comment</button>
          </Link>
          <button onClick={() => this.props.deletePost(post)}> Delete </button>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deletePost: post => dispatch(deletePost(post))}
}


export default connect(null, mapDispatchToProps)(Post)

// {comments.length > 0 && (
  // <span className='comment-count'>{comments.length}</span>
// )}
