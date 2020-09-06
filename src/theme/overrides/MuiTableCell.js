import color from '../colors'
import palette from '../palette'

export default {
  root: {
    borderBottom: 'none',
    backgroundColor: palette.white,
  },
  head: {
    fontSize: 11,
    fontWeight: 500,
    lineHeight: 2.18,
    letterSpacing: 0.3,
    color: color.secondary[900],
    padding: '14px 16px',
    backgroundColor: color.background.light,
    boxShadow: `0 -1px 0 0 ${color.background.dark}`,
    textTransform: 'uppercase',
  },
  body: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 1.29,
    letterSpacing: 'normal',
    color: color.secondary[900],
    padding: '17px 16px',
    '&.action': {
      padding: '11px 16px',
      textAlign: 'right',
    },
  },
}
