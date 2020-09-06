import palette from '../palette';

export default {
  root: {
    '&:last-child': {
      paddingTop: 24,
    },
  },
  caption: {
    color: palette.secondary[400],
  },
  select: {
    minWidth: 'unset',
    fontSize: '0.75rem',
    color: palette.secondary[400],
    '&.MuiSelect-selectMenu': {
      paddingRight: 24,
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 6,
    },
  },
  actions: {
    '& .MuiIconButton-root': {
      padding: 8,
    },
  },
};
