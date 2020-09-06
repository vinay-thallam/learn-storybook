import palette from '../palette';

export default {
  select: {
    minWidth: 120,
    '&:focus': {
      borderRadius: 3,
      backgroundColor: palette.white,
      boxShadow: `0px 0px 0px 2px ${palette.primary.main} inset`,
    },
  },
  selectMenu: {
    padding: '20px 14px 6px',
  },
};
