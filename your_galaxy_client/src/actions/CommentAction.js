export const addComment = ( postId, formData ) => {
  return dispatch => {
    return fetch(`http://localhost:3001/posts/comment/${postId}`, {
      method: "POST",
      body: JSON.stringify(postId, formData),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(phone => {
        dispatch({ type: "ADD_COMMENT", payload: resp.data });
      });
  };
}

export const deleteComment = ( postId, commentId ) => {
  return dispatch => {
    fetch(`http://localhost:3001/posts/comment/${postId}/${commentId}`, {
      method: 'DELETE'
    })
    dispatch({ type: 'DELETE_PHONE', payload: commentId })
  }
}
