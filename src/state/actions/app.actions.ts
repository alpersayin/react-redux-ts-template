import { AppActionTypes } from '../action-types';

interface IncrementAction {
  type: AppActionTypes.INCREMENT;
  payload: any;
}

interface DecrementAction {
  type: AppActionTypes.DECREMENT;
  payload: any;
}

export type AppAction = IncrementAction | DecrementAction;