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
      .then(com => {
        dispatch({ type: "ADD_COMMENT", payload: com.data });
      });
  };
}

export const deleteComment = ( id ) => {
  return dispatch => {
    fetch(`http://localhost:3001/comments/${id}`, {
      method: 'DELETE'
    })
    dispatch({ type: 'DELETE_PHONE', payload: id })
  }
}
