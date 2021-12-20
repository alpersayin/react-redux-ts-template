import { Dispatch } from 'redux';
import { AppActionTypes } from '../action-types';
import { AppAction } from '../actions';

const increment = (data: number) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AppActionTypes.INCREMENT,
      payload: data,
    });
  }
};

const decrement = (data: number) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch({
      type: AppActionTypes.DECREMENT,
      payload: data,
    });
  }
};

export const AppActionCreator = {
  increment,
  decrement
}