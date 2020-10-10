import React, { Component } from 'react'
import { deletePost } from '../../../actions/PostAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../../styling/Post.css'


class Post extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className='postCard'>
        <Link to={`/posts/${post.id}`} className='comment-on-post'>
          <h1>{post.title}</h1>
        </Link>
          <br></br>
          {post.content}
          <br></br>
          <div className="dlte-post-button">
            <button onClick={() => this.props.deletePost(post)} className='deletePost'> Delete </button>
          </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { deletePost: post => dispatch(deletePost(post))}
}


export default connect(null, mapDispatchToProps)(Post)
