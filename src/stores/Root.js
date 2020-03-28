import { createStore, combineReducers } from 'redux';
import launchCollection from './LaunchCollectionReducer';
import rocketData from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketData
});

const store = createStore(rootReducer);

export default store;
