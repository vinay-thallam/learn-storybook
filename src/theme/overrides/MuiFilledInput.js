import palette from '../palette';

export default {
  root: {
    backgroundColor: palette.white,
    boxShadow: '0px 0px 0px 1px #bcbecc inset',
    borderRadius: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    '&:hover': {
      backgroundColor: palette.white,
    },
    '&$focused': {
      backgroundColor: palette.white,
      borderRadius: 3,
      boxShadow: `0px 0px 0px 2px ${palette.primary.main} inset`,
      '&$error': {
        boxShadow: `0px 0px 0px 2px ${palette.status.danger.main} inset`,
      },
    },
    '&$disabled': {
      backgroundColor: palette.white,
      '& .MuiSelect-iconFilled': {
        color: palette.status.inactive,
      },
      '& .MuiSelect-iconFilled-divider': {
        backgroundColor: palette.surface.background.dark,
      },
    },
    '&$error': {
      boxShadow: `0px 0px 0px 1px ${palette.status.danger.main} inset`,
      '& .MuiSelect-select:focus': {
        boxShadow: `0px 0px 0px 2px ${palette.status.danger.main} inset`,
      },
    },
  },
  input: {
    padding: '20px 14px 6px',
    height: 18,
    fontSize: 14,
    color: palette.secondary.main,
    '&$disabled': {
      color: palette.status.inactive,
    },
  },
  adornedEnd: {
    paddingRight: 14,
    color: palette.secondary.main,
    '&$disabled': {
      color: palette.status.inactive,
    },
  },
  multiline: {
    padding: '22px 14px 6px',
    fontSize: 14,
    color: palette.secondary.main,
    '&$disabled': {
      color: palette.status.inactive,
    },
  },
};
