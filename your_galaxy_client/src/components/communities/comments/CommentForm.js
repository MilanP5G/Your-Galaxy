import React, { useState } from 'react'
import { addComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'


const CommentForm = ({ postId, addComment }) => {
  const [content, setState] = useState({ content: '' })


  const handleSubmit = event => {
    event.preventDefault();
    addComment({ post_id: postId, content: content })
    setState({
      content: ''
    })
  }

  const handleChange = (event) => {
    setState({
      content: event.target.value
    })
  }

    return (
      <div>
       <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='content'
          placeholder='Leave a comment here...'
          onChange={handleChange}
          required
        />
        <button type='submit'>Submit</button>
       </form>
      </div>
    );
}

export default connect(null, { addComment })(CommentForm)
