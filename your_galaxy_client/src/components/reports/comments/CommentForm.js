import React, { useState } from 'react'
import { addComment } from '../../../actions/CommentAction'
import { connect } from 'react-redux'
import '../../../styling/CommentForm.css'


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
      <div className="comment-form">
       <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='content'
          id="commentForm-content"
          value={content}
          placeholder='Leave a comment here...'
          onChange={(event) => setContent(event.target.value)}
          required
        />
        <br></br>
        <button type='submit' className='submit-comment'>Submit</button>
       </form>
      </div>
     </div>
    );
}

export default connect(null, { addComment })(CommentForm)
