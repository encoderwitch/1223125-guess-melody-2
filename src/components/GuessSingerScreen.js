import React from 'react';
import PropTypes from 'prop-types';

const GuessSingerScreen = (props) => {
  const {time, errors, question, onAnswer, screenIndex} = props;

  return (
    <article id="game-artist">
      <section className="game game--artist">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"></img>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle className="timer__line" cx="390" cy="390" r="370"
              style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">{time}</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>
          <div className="game__mistakes">
            <div className="wrong">{errors}</div>
            <div className="wrong">{errors}</div>
            <div className="wrong">{errors}</div>
          </div>
        </header>

        <section className="game__screen">
          <h2 className="game__title">Кто исполняет эту песню?</h2>
          <div className="game__track">
            <div className="track">
              <button className="track__button track__button--play" type="button"></button>
              <div className="track__status">
                <audio></audio>
              </div>
            </div>
          </div>

          <form className="game__artist">
            {question.answers.map((answer) =>
              <div className="artist" key={`${screenIndex}-answer-${answer.id}`}>
                <input
                  id={`answer-${answer.id}`}
                  value={answer.singer}
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  onChange={(evt) => {
                    onAnswer(evt.target.value);
                  }}
                ></input>
                <label className="artist__name" htmlFor={`answer-${answer.id}`}>
                  <img className="artist__picture" src={`img/${answer.picture}`} alt={answer.singer}></img>
                  {answer.singer}
                </label>
              </div>
            )}
          </form>
        </section>
      </section>
    </article>
  );
};

GuessSingerScreen.propTypes = {
  time: PropTypes.number,
  errors: PropTypes.number.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`singer`]).isRequired,
    song: PropTypes.shape({
      src: PropTypes.string.isRequired,
      singer: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      singer: PropTypes.string.isRequired
    }))
  }).isRequired,
  onAnswer: PropTypes.func.isRequired,
  screenIndex: PropTypes.number.isRequired
};

export default GuessSingerScreen;
