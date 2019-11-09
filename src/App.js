import React, {useState} from 'react';
import OpenScreen from './components/OpenScreen';
import PropTypes from 'prop-types';
import GuessSingerScreen from './components/GuessSingerScreen';
import GuessGenreScreen from './components/GuessGenreScreen';

const App = (props) => {
  const {gameTimeApp, errorCountApp, questions} = props;
  const [questionsNumber, setQuestionNumber] = useState(-1);
  const [lastIndex] = useState(questions.length);

  function HandleClickOnButton() {
    return setQuestionNumber(questionsNumber + 1);
  }
  if (questionsNumber === -1 || questionsNumber === lastIndex) {
    if (questionsNumber === lastIndex) {
      setQuestionNumber(-1); // start game again
    }
    return (
      <OpenScreen time={gameTimeApp} errorCount={errorCountApp} HandleClick={HandleClickOnButton} />
    );
  }

  const currentQuestion = questions[questionsNumber];
  switch (currentQuestion.type) {
    case `genre`:
      return (<GuessGenreScreen
        time={gameTimeApp} errors={errorCountApp} question={currentQuestion} onAnswer={HandleClickOnButton} screenIndex={questionsNumber} />
      );
    case `singer`:
      return <GuessSingerScreen
        time={gameTimeApp} errors={errorCountApp} question={currentQuestion} onAnswer={HandleClickOnButton} screenIndex={questionsNumber} />;
  }
  return true;
};

App.defaultProps = {
  gameTimeApp: 0,
  errorCountApp: 0,
};

App.propTypes = {
  gameTimeApp: PropTypes.number,
  errorCountApp: PropTypes.number,
  questions: PropTypes.array.isRequired,
};

export default App;
