import React, { Fragment } from 'react'
import CommentForm from './CommentForm'
import Comments from './Comments'
import '../../../styling/PostShow.css'


const PostShow = ({ match, posts, comments }) => {

  if (posts.posts.length === 0) return null;
  const post = posts.posts.find( post => post.id === parseInt(match.params.id))

  return (
    <Fragment>
      <div className='post-show' >
       <h1>{post.title}</h1>
       <p>{post.content}</p>
       Comments
       <div className='comments'>
        <Comments postId={post.id} comments={comments} />
       </div>
      </div>
      <br></br>
      <div className='show-comment-form' >
       <CommentForm postId={post.id} />
      </div>

    </Fragment>
  )

}

export default PostShow
