import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const init = () => {
  const data = {
    gameTime: 7,
    errorCount: 4,
  };
  ReactDOM.render(<App gameTimeApp={data.gameTime} errorCountApp={data.errorCount}/>, document.getElementById(`root`));
};

init();
