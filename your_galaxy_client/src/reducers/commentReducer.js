export const commentReducer = (state = {comments: []}, action) => {
    switch (action.type) {
        case 'ADD_COMMENT':

          return { ...state, comments: [ ...state.comments, action.payload ]};

        case 'FETCH_COMMENT':

          return { ...state, comments: action.payload }

        case 'DELETE_COMMENT':

          return { ...state, comments: state.comments.filter(comment => comment.id !== action.payload.id)}


        default:
        return state;
    }
}
