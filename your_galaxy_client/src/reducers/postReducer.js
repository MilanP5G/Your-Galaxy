export const postReducer = (state = {posts: []}, action) => {
    switch (action.type) {
        case 'ADD_POST':

          return { ...state, posts: [ ...state.posts, action.payload ]};

        case 'FETCH_POSTS':

          return { ...state, posts: action.payload }

        case 'DELETE_POST':

          return { ...state, posts: state.posts.filter(post => post.id !== action.payload.id)}


        default:
        return state;
    }
}
