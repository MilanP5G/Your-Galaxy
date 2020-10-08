import React from 'react'
import '../../../styling/Post.css'

const PostShow = ({ match, posts }) => {

  if (posts.posts.length === 0) return null;
  const post = posts.posts.find( post => post.id === parseInt(match.params.id))

  return (
    <div className='post-show'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  )

}

export default PostShow
