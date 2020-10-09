import React, { Fragment } from 'react'
import CommentForm from './CommentForm'
import '../../../styling/PostShow.css'


const PostShow = ({ comment, match, posts }) => {

  if (posts.posts.length === 0) return null;
  const post = posts.posts.find( post => post.id === parseInt(match.params.id))

  return (
    <Fragment>
      <div className='post-show' >
       <h1>{post.title}</h1>
       <p>{post.content}</p>
      </div>
      <div className='show-comment-form' >
       <CommentForm postId={post.id} />
      </div>
    </Fragment>
  )

}

export default PostShow
