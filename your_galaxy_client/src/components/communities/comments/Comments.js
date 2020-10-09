import React from 'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import '../../../styling/Post.css'

const Comments = props => {

    return (
      <div>
      {props.comments.comments.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
      </div>
    )
}

export default Comments
