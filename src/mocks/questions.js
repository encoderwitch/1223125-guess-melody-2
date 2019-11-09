export const questions = [
  {
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
  },
  {
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
  }
];

export const params = {
  gameTime: 5,
  errorCount: 3,
};
