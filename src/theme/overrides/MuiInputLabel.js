import palette from '../palette';

export default {
  root: {
    '&$focused': {
      color: palette.primary.main,
    },
    '&$error': {
      color: palette.status.danger.main,
    },
  },
  filled: {
    fontSize: 14,
    lineHeight: '1.29',
    letterSpacing: 'normal',
    color: palette.secondary[400],
    '&.MuiInputLabel-shrink': {
      fontSize: 11,
      transform: 'translate(12px, 14px) scale(1)',
    },
  },
  formControl: {
    top: -7,
    left: 2,
  },
};
