import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenreScreen from './GuessGenreScreen';

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

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {createRef() {}};
  }
  return null;
}

it(`GuessGenreScreen correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<GuessGenreScreen
      question={mockQuestion}
      time={0}
      errors={0}
      screenIndex={0}
      onAnswer={() => {}}
    />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
