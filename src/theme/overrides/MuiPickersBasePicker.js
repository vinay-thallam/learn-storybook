import palette from '../palette';

export default {
  pickerView: {
    backgroundColor: palette.white,
    borderRadius: 4,
    '& .MuiIconButton-sizeSmall': {
      color: palette.secondary.main,
    },
    '& .MuiTypography-alignCenter': {
      color: palette.secondary.main,
      lineHeight: 1.25,
      fontSize: 16,
      fontWeight: 500,
      fontStretch: 'normal',
      fontStyle: 'normal',
      letterSpacing: 'normal',
    },
    '& .MuiPickersDay-day': {
      color: palette.secondary.main,
      margin: '2px 2px',
      '&.MuiPickersDay-daySelected': {
        color: palette.white,
      },
      '&.MuiPickersDay-dayDisabled': {
        color: palette.status.inactive,
      },
    },
    '& .MuiTypography-body2': {
      fontSize: 14,
    },
    '& .MuiPickersCalendarHeader-dayLabel': {
      color: palette.secondary[400],
      lineHeight: 1.25,
    },
    '& .MuiPickersClockNumber-clockNumber': {
      fontSize: 18,
      fontWeight: 'normal',
      fontStretch: 'normal',
      fontStyle: 'normal',
      lineHeight: 1,
      letterSpacing: 'normal',
      textAlign: 'center',
      color: palette.secondary.main,
      '&.MuiPickersClockNumber-clockNumberSelected': {
        color: palette.white,
      },
    },
  },
};
