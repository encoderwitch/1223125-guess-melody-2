import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import OpenScreen from './OpenScreen';

Enzyme.configure({adapter: new Adaptor()});

it(`renders correctly`, () => {
  const handleClick = jest.fn();
  const openScreen = shallow(<OpenScreen
    time = {0}
    mistakes ={0}
    onClick = {handleClick} />);

  const startButton = openScreen.find(`button`);
  startButton.simulate(`click`);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
