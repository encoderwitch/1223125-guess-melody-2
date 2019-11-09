import Enzyme, {shallow} from 'enzyme';
import GuessSingerScreen from './GuessSingerScreen';
import React from 'react';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new EnzymeAdapter()});

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


it(`GuessArtistScreen onAnswer returns correct data`, () => {
  const answerUser = jest.fn();
  const wrapper = shallow(<GuessSingerScreen
    question={mockQuestion}
    time={0}
    errors={0}
    screenIndex={0}
    onAnswer={answerUser}
  />);

  const singerInput = wrapper.find(`input.artist__input`).first();

  singerInput.simulate(`change`, {
    target: {
      value: `Biagio Antonacci`,
    },
  });

  expect(answerUser).toHaveBeenCalledTimes(1);
  expect(answerUser.mock.calls[0][1]).toEqual(mockQuestion.answers[0].artist);
});
