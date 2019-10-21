import React from 'react';
import renderer from 'react-test-renderer';
import OpenScreen from './OpenScreen';

it(`renders correctly`, () => {
  const tree = renderer
      .create(<OpenScreen/>)
      .toJSON();
  expect(tree).toMatchSnapshot();
});
