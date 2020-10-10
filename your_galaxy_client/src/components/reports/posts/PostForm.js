import React, { useState } from 'react'
import { addPost } from '../../../actions/PostAction'
import { connect } from 'react-redux'
import '../../../styling/PostForm.css'


const PostForm = props => {
  const [state, setState] = useState({
    title: '',
    content: ''
 })

  const handleSubmit = event => {
    event.preventDefault();
    props.addPost(state)
    setState({
      title: '',
      content: ''
    });
    props.history.push(`/report`)
  }

  const handleChange = (event) => {
    setState({
      ...state, [event.target.name]: event.target.value
    })
  }

  const value = state.value

    return (
      <div className="post-form-section">
       <form onSubmit={handleSubmit}>
       <h1 className='report'>Report</h1>
        <input
          type='text'
          name='title'
          id='postForm-title'
          placeholder='Add a title'
          onChange={handleChange}
          value={value}
        />
        <br></br>
        <textarea
          type='text'
          name='content'
          id='postForm-content'
          cols='50'
          rows='10'
          placeholder='Report here...'
          onChange={handleChange}
          value={value}
        />
        <br></br>
        <button type='submit' className="submit-post">Submit</button>
       </form>
      </div>
    );
}

export default connect(null, { addPost })(PostForm)
