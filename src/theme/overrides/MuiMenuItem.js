import palette from '../palette';

export default {
  root: {
    color: palette.secondary.main,
    '&:hover': {
      backgroundColor: 'rgba(64, 64, 64, 0.05)',
    },
    '&$selected': {
      backgroundColor: palette.surface.background.dark,
    },
  },
  gutters: {
    padding: '11px 14px',
  },
};
