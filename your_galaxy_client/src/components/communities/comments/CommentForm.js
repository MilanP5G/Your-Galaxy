import React, { useState } from 'react'
import { addComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'


const CommentForm = ({ postId, addComment }) => {
  const [content, setContent] = useState('')


  const handleSubmit = event => {
    event.preventDefault();
    addComment({ post_id: postId, content: content })
    resetForm()
  }

  const resetForm = () => {
    setContent('')
  }

  console.log(content)

    return (
      <div>
       <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='content'
          value={content}
          placeholder='Leave a comment here...'
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <button type='submit'>Submit</button>
       </form>
      </div>
    );
}

export default connect(null, { addComment })(CommentForm)
