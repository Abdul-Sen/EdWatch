import { createStore, combineReducers, appl, applyMiddleware } from 'redux';
import userProfile from '../reducers/userProfile';
import messages from '../reducers/messages';
import { addMessage } from '../actions/messages';
import thunk from 'redux-thunk';
// by not calling a function when I import the file, I am exporting the same instance of the createStore
const rootReducer = combineReducers({
    userProfile,
    messages
  });

  //global store
  const globalStore = createStore(rootReducer,{},applyMiddleware(thunk));

  export default globalStore;