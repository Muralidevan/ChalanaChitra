import { createStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import postReducer from '../reducers/postReducer'

const middleware = [thunk]

const configureStore = () => {
	const store = createStore(
		combineReducers({
			movies: postReducer,
		}),applyMiddleware(...middleware)
	)
	return store
}

export default configureStore
