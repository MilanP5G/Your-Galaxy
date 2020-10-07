import React, { useState } from 'react'
import { addComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'


const CommentForm = ({ postId, addComment }) => {
  const [content, setState] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    addComment(postId, { content })
    setState('')
  }

    return (
      <div>
       <form onSubmit={handleSubmit}>
        <textarea
          type='text'
          name='content'
          cols='30'
          rows='5'
          placeholder='Leave a comment here...'
          onChange={(event) => setState(event.target.value)}
          required
        />
        <button type='submit'>Submit</button>
       </form>
      </div>
    );
}

export default connect(null, { addComment })(CommentForm)
