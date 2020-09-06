import colors from './colors';

export default {
  black: colors.black,
  white: colors.white,
  primary: {
    contrastText: colors.white,
    main: colors.primary[500],
    ...colors.primary,
  },
  secondary: {
    contrastText: colors.white,
    main: colors.secondary[900],
    ...colors.secondary,
  },
  action: {
    disabledBackground: colors.surface.background.dark,
    disabled: colors.status.inactive,
    selected: colors.surface.background.dark,
  },
  error: {
    main: colors.status.danger.main,
  },
  surface: colors.surface,
  status: colors.status,
  success: {
    main: colors.status.success.main,
  },
  warning: {
    main: colors.status.warning.main,
  },
  info: {
    main: colors.status.default.main,
  },
};
