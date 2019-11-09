import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {questions, params} from './mocks/questions';

const init = () => {
  ReactDOM.render(<App gameTimeApp={params.gameTime} errorCountApp={params.errorCount} questions={questions}/>, document.getElementById(`root`));
};

init(questions, params);
