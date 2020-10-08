import React from 'react'
// import { useParams } from 'react-router-dom'
// import { fetchPosts } from '../../../actions/PostAction'
// import { connect } from 'react-redux'
import '../../../styling/Post.css'

const PostShow = ({ match, posts }) => {
  
  const post = posts.posts.find( p => p.id === parseInt(match.params.id))
  if (posts.posts.length === 0) return null

  return (
    <div className='post-show'>
      {post.title}
      {post.content}
    </div>
  )

}

export default PostShow
