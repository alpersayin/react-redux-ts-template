import { combineReducers } from 'redux';
import { AppReducer } from './app.reducer';

const reducer = combineReducers({
  app: AppReducer,
});

const rootReducer = (state: any, action: any) => {
  return reducer(state, action)
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
