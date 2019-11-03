import React from 'react';
import PropTypes from 'prop-types';

const OpenScreen = (props) => {
  const {time, errorCount, HandleClick} = props;

  return (
    <div>
      <h2>Rules of game</h2>
      <p>The rules are simple:</p>
      <ul>
        <li>Time for all questions {time} min. </li>
        <li>You can make {errorCount} errors.</li>
      </ul>
      <p>Good luck!</p>
      <button onClick={HandleClick}>Start of game</button>
    </div>
  );
};

OpenScreen.defaultProps = {
  time: 0,
  errorCount: 0,
};

OpenScreen.propTypes = {
  time: PropTypes.number,
  errorCount: PropTypes.number,
  HandleClick: PropTypes.func,
};

export default OpenScreen;
