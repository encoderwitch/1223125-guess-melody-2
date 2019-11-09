
import React from 'react';
import renderer from 'react-test-renderer';
import GuessSingerScreen from './GuessSingerScreen';

const mockQuestion = {
  type: `singer`,
  song: {
    singer: `Biagio Antonacci`,
    src: `biagio_antonacci_-_mio_fratello_feat_mario_incudine_(zf.fm).mp3`
  },
  answers: [
    {
      id: 1,
      picture: `ilvolo.jpg`,
      singer: `Il Volo`
    },
    {
      id: 2,
      picture: `biagio.jpg`,
      singer: `Biagio Antonacci`
    },
    {
      id: 3,
      picture: `adriano.jpg`,
      singer: `Adriano Celentano`
    }
  ]
};

function createNodeMock(element) {
  if (element.type === `audio`) {
    return {createRef() {}};
  }
  return null;
}

it(`GuessSingerScreen correctly renders`, () => {
  const options = {createNodeMock};
  const tree = renderer
    .create(<GuessSingerScreen
      question={mockQuestion}
      time={0}
      errors={0}
      screenIndex={0}
      onAnswer={() => {}}
    />, options)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
