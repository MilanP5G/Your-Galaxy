import React from 'react'
import Comment from './Comment'
import '../../../styling/Post.css'

const Comments = props => {

  const comments = props.comments.comments.filter(comment => comment.post_id === props.postId)

    return (
      <div>
      {comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
      </div>
    )
}

export default Comments
