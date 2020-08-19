export const API_URL = 'https://api.themoviedb.org/3/';

export const API_KEY = process.env.REACT_APP_API_KEY;

export const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/';

// sizes: w300, w780, w1280, original
export const BACKDROP_SIZE = 'w1280';

// sizes: w92, w154, w185, w342, w500, w780, original
export const POSTER_SIZE = 'w500';

export const URL = 'https://raw.githubusercontent.com/mxmnk/img/master/';

export const titles = [
  {
    title: 'Humans',
    quote: "Humanity - it's not a state - it's a quality.",
    endpoint: 'humans.jpg',
  },
  {
    title: 'Vikings',
    quote: 'A Viking never gives up on his revenge.',
    endpoint: 'vikings.jpg',
  },
  {
    title: 'Breaking Bad',
    quote: 'Nothing can change what we’ve done.',
    endpoint: 'breaking-bad.jpg',
  },
  {
    title: 'Game of Thrones',
    quote: 'When you play the Game of Thrones, you win or you die.',
    endpoint: 'game-of-thrones.jpg',
  },
  {
    title: 'Fleabag',
    quote: "Don't make me an optimist, you will ruin my life.",
    endpoint: 'fleabag.jpg',
  },
  {
    title: 'The New Pope',
    quote: 'Those who believe in God don’t believe in anything.',
    endpoint: 'the-new-pope.jpg',
  },
];
