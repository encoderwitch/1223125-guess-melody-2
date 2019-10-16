import React from 'react';
import PropTypes from 'prop-types';

const OpenScreen = (props) => {
  const {time, errorCount} = props;

  return (
    <div>
      <h2>Rules of game</h2>
      <p>The rules are simple:</p>
      <ul>
        <li>Time for all questions {time} min. </li>
        <li>You can make {errorCount} errors.</li>
      </ul>
      <p>Good luck!</p>
    </div>
  );
};

OpenScreen.PropTypes = {
  time: PropTypes.number,
  errorCount: PropTypes.number,
};

export default OpenScreen;