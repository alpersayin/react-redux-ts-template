import React, { useLayoutEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppActionCreator } from './state/action-creators';
import { RootState } from './state/reducers';

import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const {increment, decrement} = bindActionCreators(AppActionCreator, dispatch);
  const AppState = useSelector((state:RootState) => state.app);

  const [state, setState] = useState<number>(0);

  const ref = useRef(true);
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current = false;
      return
    }
    let _number = AppState.data;
    setState(_number!);
  }, [AppState.data]);

  const handleIncrement = () => {
    increment(state);
  }

  const handleDecrement = () => {
    decrement(state);
  }

  return (
    <div >
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      
      <h2>{state}</h2>
    </div>
  );
}

export default App;
