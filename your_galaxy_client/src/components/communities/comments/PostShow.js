import React, { Fragment } from 'react'
import CommentForm from './CommentForm'
import Comment from './Comment'
import '../../../styling/PostShow.css'


const PostShow = ({ match, posts }) => {

  if (posts.posts.length === 0) return null;
  const post = posts.posts.find( post => post.id === parseInt(match.params.id))

  return (
    <Fragment>
      <div className='post-show' >
       <h1>{post.title}</h1>
       <p>{post.content}</p>
       Comments
       <div className='comments'>
         {post.comments.map((comment) => (
           <Comment key={comment.id} comment={comment} postId={post.id} />
         ))}
       </div>
      </div>
      <div className='show-comment-form' >
       <CommentForm postId={post.id} />
      </div>

    </Fragment>
  )

}

export default PostShow
