export const addPost = post => {
  return dispatch => {
    return fetch("http://localhost:3001/posts", {
      method: "POST",
      body: JSON.stringify({ post: post }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(post => {
        dispatch({ type: "ADD_POST", payload: post });
      });
  };
}

export const fetchPosts = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/posts')
        .then(resp => {
            return resp.json()
        })
        .then(posts => {
          console.log(posts)
            dispatch({ type: 'FETCH_POSTS', payload: posts })
        })
    }
}

export const deletePost = (post) => {
  return dispatch => {
    fetch(`http://127.0.0.1:3001/posts/${post.id}`, {
      method: 'DELETE'
    })
    dispatch({ type: 'DELETE_POST', payload: post })
  }
}
