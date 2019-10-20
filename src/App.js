import React from 'react';
//import OpenScreen from './components/OpenScreen';
import PropTypes from 'prop-types';

const App = (props) => {
  const {gameTime, errorCount} = props;

  return (
    // <OpenScreen
    //   time = {gameTime}
    //   errorCount = {errorCount}
    // />
    <div>SSS
        
    </div>
  );
};

App.defaultProps = {
  gameTime: 0,
  errorCount: 0,
};

App.propTypes = {
  gameTime: PropTypes.number,
  errorCount: PropTypes.number,
};

export default App;