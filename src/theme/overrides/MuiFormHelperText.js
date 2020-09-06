import palette from '../palette';

export default {
  root: {
    '&$focused': {
      color: palette.primary.main,
      '&$error': {
        color: palette.status.danger.main,
      },
    },
  },
  contained: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 1.27,
    letterSpacing: 'normal',
    color: palette.secondary[400],
    fontWeight: 'normal',
  },
};
