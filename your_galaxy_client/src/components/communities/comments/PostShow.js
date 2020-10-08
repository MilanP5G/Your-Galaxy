import React from 'react'

const PostShow = ({ match, posts }) => {

  const post = posts.posts.find( pst => pst.id === parseInt(match.params.id))
  if (posts.posts.length === 0) return null

  return (
    <div className='post-show'>
      {post.title}
      {post.content}
    </div>
  )

}

export default PostShow
