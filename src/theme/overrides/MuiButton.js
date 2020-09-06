import colors from '../colors';
import palette from '../palette';

export default {
  root: {
    borderRadius: 3,
    padding: '10px 16px',
    fontSize: '1rem',
    boxShadow: 'none',
    '&:disabled': {
      color: colors.status.inactive,
    },
  },
  contained: {
    textTransform: 'capitalize',
    backgroundColor: palette.white,
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset',
    color: palette.secondary.main,
    '&:active': {
      backgroundColor: palette.white,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset',
    },
    '&:focus': {
      backgroundColor: palette.white,
      boxShadow: `0px 0px 0px 2px ${palette.primary.main} inset`,
    },
    '&:hover': {
      backgroundColor: colors.background.light,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.1) inset',
    },
    '&:disabled': {
      backgroundColor: colors.surface.background.light,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    },
  },
  containedPrimary: {
    boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    '&:active': {
      backgroundColor: palette.primary.main,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    },
    '&:focus': {
      backgroundColor: palette.primary.main,
      boxShadow: `0px 0px 0px 2px ${palette.secondary.main} inset`,
    },
    '&:hover': {
      backgroundColor: '#0084d6',
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    },
    '&:disabled': {
      backgroundColor: colors.surface.background.dark,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    },
  },
  containedSecondary: {
    '&:active': {
      backgroundColor: palette.secondary.main,
    },
    '&:focus': {
      backgroundColor: palette.secondary.main,
      boxShadow: `0px 0px 0px 2px ${palette.primary.main} inset`,
    },
    '&:hover': {
      backgroundColor: '#0d295c',
    },
    '&:disabled': {
      backgroundColor: colors.surface.background.dark,
      boxShadow: '0px 0px 0px 1px rgba(0, 0, 0, 0.05) inset',
    },
  },
  containedSizeSmall: {
    padding: '7px 16px',
    fontSize: '0.875rem',
    lineHeight: 1.29,
  },
  text: {
    backgroundColor: 'transparent',
    color: palette.secondary.main,
    '&:hover': {
      backgroundColor: 'rgba(64, 64, 64, 0.05)',
    },
  },
  textSizeSmall: {
    fontSize: '0.75rem',
    padding: '4px 8px',
    lineHeight: 1.85,
  },
  outlined: {
    padding: '9px 16px',
    textTransform: 'capitalize',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    color: palette.secondary.main,
    '&$disabled': {
      borderColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  outlinedPrimary: {
    borderColor: palette.primary.main,
  },
  outlinedSecondary: {
    borderColor: palette.secondary.main,
    '&$disabled': {
      borderColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  outlinedSizeSmall: {
    padding: '6px 16px',
    fontSize: '0.875rem',
    lineHeight: 1.29,
  },
};
