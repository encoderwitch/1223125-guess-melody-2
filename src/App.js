import React from 'react';
import OpenScreen from './components/OpenScreen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTimeApp, errorCountApp} = props;

  return (
    <OpenScreen
      time = {gameTimeApp}
      errorCount = {errorCountApp}
    />
  );
};

App.defaultProps = {
  gameTimeApp: 0,
  errorCountApp: 0,
};

App.propTypes = {
  gameTimeApp: PropTypes.number,
  errorCountApp: PropTypes.number,
};

export default App;
