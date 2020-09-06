import palette from '../palette';

export default {
  root: {
    textTransform: 'none',
    fontSize: 14,
    lineHeight: '18px',
  },
  textColorPrimary: {
    color: palette.secondary[400],
    '&.active': {
      color: palette.secondary.main,
    },
  },
};
