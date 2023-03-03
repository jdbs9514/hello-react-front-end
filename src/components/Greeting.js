import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../reducers/greetingReducer';

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting.message}</h1>
    </div>
  );
};

export default Greeting;
