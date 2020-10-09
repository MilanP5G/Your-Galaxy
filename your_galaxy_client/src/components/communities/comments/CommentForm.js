import React, { useState } from 'react'
import { addComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'


const CommentForm = ({ postId, addComment }) => {
  const [content, setState] = useState({ content: '' })

  console.log(content)

  const handleSubmit = event => {
    event.preventDefault();
    addComment({ post_id: postId, content: content })
    setState({
      content: ''
    })
  }

    return (
      <div>
       <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='content'
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
