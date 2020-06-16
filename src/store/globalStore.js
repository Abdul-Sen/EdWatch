import { createStore, combineReducers } from 'redux';
import userProfile from '../reducers/userProfile';
import messages from '../reducers/messages';

export default ()=>{

    const rootReducer = combineReducers({
        userProfile,
        messages
      });

      //global store
      const globalStore = createStore(rootReducer);

      return globalStore;
  }