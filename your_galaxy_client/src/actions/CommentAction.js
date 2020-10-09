export const addComment = ( comment ) => {
  return dispatch => {
    return fetch(`http://localhost:3001/posts/${comment.post_id}/comments`, {
      method: "POST",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(comment => {
        dispatch({ type: "ADD_COMMENT", payload: comment });
      });
  };
}

export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/comments')
        .then(resp => {
            return resp.json()
        })
        .then(comments => {
          console.log(comments)
            dispatch({ type: 'FETCH_COMMENT', payload: comments })
        })
    }
}

export const deleteComment = ( comment ) => {
  return dispatch => {
    fetch(`http://localhost:3001/comments/${comment.id}`, {
      method: 'DELETE'
    })
    dispatch({ type: 'DELETE_COMMENT', payload: comment })
  }
}
