import React from 'react';
import OpenScreen from './components/OpenScreen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return (
    <OpenScreen
      time = {gameTime}
      errorCount = {errorCount}
    />
  );
};

App.prototype = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};
export default App;