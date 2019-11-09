import React from 'react';
import PropTypes from 'prop-types';

const OpenScreen = (props) => {
  const {time, errorCount, HandleClick} = props;

  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img src="img/melody-logo.png" alt="Guess the melody" width="186" height="83"/>
      </div>
      <div>
        <h2 className="welcome__rules-title">Rules of game</h2>
        <p className="welcome__text">The rules are simple:</p>
        <ul className="welcome__rules-list">
          <li>Time for all questions {time} min. </li>
          <li>You can make {errorCount} errors.</li>
        </ul>
        <p className="welcome__text">Good luck!</p>
        <button className="welcome__button" onClick={HandleClick}>
          <span className="visually-hidden">Start of game</span>
        </button>
      </div>
    </section>
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
