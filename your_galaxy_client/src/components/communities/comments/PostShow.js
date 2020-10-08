import React from 'react'

const PostShow = ({ match, posts }) => {

  const post = posts.posts.find( post => post.id === parseInt(match.params.id))

  return (
    <div className='post-show'>
      {post.title}
      {post.content}
    </div>
  )

}

export default PostShow
