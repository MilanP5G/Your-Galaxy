import { combineReducers } from 'redux'
import { phoneReducer } from './phoneReducer'
import { postReducer } from './postReducer'
import { commentReducer } from './commentReducer'

export const rootReducer = combineReducers({
  phones: phoneReducer,
  posts: postReducer,
  comments: commentReducer
})
