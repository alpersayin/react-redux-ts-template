import { AppActionTypes } from '../action-types';
import { AppAction } from '../actions';

export interface AppState {
  data: number | undefined;
}

const initialState: AppState = {
  data: undefined,
}

export const AppReducer = (state: AppState = initialState, action: AppAction): AppState => {
  switch (action.type) {
    case AppActionTypes.INCREMENT:
      return {
        ...state,
        data: action.payload + 1,
      };
      case AppActionTypes.DECREMENT:
        return {
          ...state,
          data: action.payload - 1,
        };    
    default:
      return state;
  }
}
