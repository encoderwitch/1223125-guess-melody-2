import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const init = () => {
  const data = {
    gameTime: 25,
    errorCount: 15,
  };
  ReactDOM.render(<App gameTime={data.gameTime} errorCount={data.errorCount}/>, document.getElementById(`root`));
};

init();
