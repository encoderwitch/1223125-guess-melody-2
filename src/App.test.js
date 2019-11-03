import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it(`renders correctly`, () => {
  const tree = renderer
      .create(<App
        time = {0}
        mistakes ={0}
      />)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
