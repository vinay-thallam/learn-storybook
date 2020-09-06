export default {
  toolbar: {
    paddingLeft: 24,
    paddingRight: 24,
    '& .MuiPickersToolbarText-toolbarTxt': {
      '&.MuiTypography-h4': {
        // In zeplin it is 36, but due to 2 digit date selection it is overflowing need to keep reduced size font to look better
        fontSize: 34,
      },
      '&.MuiTypography-h3': {
        fontSize: 34,
      },
      '&.MuiTypography-subtitle1': {
        fontSize: 14,
        lineHeight: 1.29,
      },
    },
  },
};
