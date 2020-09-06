import palette from '../palette';

export default {
  root: {
    boxShadow: `0 -1px 0 0 ${palette.surface.background.dark}`,
    '&$selected': {
      backgroundColor: palette.surface.dark,
    },
  },
};
