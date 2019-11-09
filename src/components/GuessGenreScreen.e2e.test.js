import Enzyme, {mount} from 'enzyme';
import React from 'react';
import GuessGenreScreen from './GuessGenreScreen';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

const mockQuestion = {
  type: `genre`,
  genre: `Blues`,
  answers: [
    {
      id: 1,
      src: `https://commons.wikimedia.org/wiki/File:Blues_Slow_by_Michael_Huber.ogg.mp3`,
      genre: `Blues`
    },
    {
      id: 2,
      src: `https://commons.wikimedia.org/wiki/File:Stringed_Disco_(ISRC_USUAN1100059).mp3`,
      genre: `Disco`
    },
    {
      id: 3,
      src: `https://commons.wikimedia.org/wiki/File:Apero_Hour_(ISRC_USUAN1700070).mp3`,
      genre: `Jazz`
    }
  ]
};


it(`GuessGenreScreen onAnswer returns correct data`, () => {
  const answerUser = jest.fn();

  const wrapper = mount(<GuessGenreScreen
    question={mockQuestion}
    time={0}
    errors={0}
    screenIndex={0}
    onAnswer={answerUser}
  />);

  wrapper.find(`button`).at(3).simulate(`click`);
  expect(answerUser).toHaveBeenCalledTimes(1);
  //  wrapper.find([className="game__submit button"]).at(1).simulate(event);
});
