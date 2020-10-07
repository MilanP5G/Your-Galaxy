import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import '../../../styling/Post.css'

class Posts extends Component {

  render() {
    return (
      <div>
      {this.props.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
      <Link to='/posts/add' >
        <button className='add-post'>New Post</button>
      </Link>
      </div>
    )
  }
}

export default Posts
