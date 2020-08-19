interface Sizes {
  [key: string]: string;
}

export default {
  up(size: string) {
    const sizes: Sizes = {
      sm: '767.93px',
      md: '1365.93px',
      lg: '1439.93px',
      xl: '1919.93px',
    };
    return `@media only screen and (min-width: ${sizes[size]})`;
  },
  down(size: string) {
    const sizes: Sizes = {
      sm: '767.93px',
      md: '1365.93px',
      lg: '1439.93px',
      xl: '1919.93px',
    };
    return `@media only screen and (max-width: ${sizes[size]})`;
  },
};
