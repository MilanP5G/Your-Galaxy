import React from 'react'
import { Link } from 'react-router-dom'
import Post from './Post'
import '../../../styling/Post.css'

const Posts = props => {

    return (
      <div>
      {props.posts.posts.map(post => (
        <Post post={post} key={post.id} />
      ))}
      <Link to='/posts/add' >
        <button className='add-post'>New Post</button>
      </Link>
      </div>
    )
}

export default Posts
