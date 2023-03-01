import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchMessage } from '../redux/actions';

const Greeting = ({ greeting, fetchMessage }) => {
  useEffect(() => {
    fetchMessage();
  });

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  greeting: state.greeting
});

export default connect(mapStateToProps, { fetchMessage })(Greeting);