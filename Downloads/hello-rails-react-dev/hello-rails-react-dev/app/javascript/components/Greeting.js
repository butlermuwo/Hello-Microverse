import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingApi } from '../store/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGreetingApi());
  }, []);
  const message = useSelector(({ msgReducer }) => msgReducer);

  return <React.Fragment>Greeting: {message}</React.Fragment>;
};

export default Greeting;
