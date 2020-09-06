import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'

export const StyledTable = withStyles(theme => ({
  root: {
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: `0 ${theme.spacing(0.75)}px`,
    padding: theme.spacing(1),
  },
}))(Table)

export const StyledTableRow = withStyles(theme => ({
  root: {
    boxShadow: `0 1px 3px 0 ${theme.palette.surface.background.dark}, 0 0 0 1px ${theme.palette.surface.background.dark}`,
  },
  head: {
    boxShadow: 'none',
  },
}))(TableRow)

export const StyledTableCell = withStyles(theme => ({
  head: {
    ...theme.typography.body2,
    fontWeight: theme.typography.fontWeightBold,
    lineHeight: 1.67,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    boxShadow: 'none',
  },
  body: {
    ...theme.typography.body2,
    textAlign: 'center',
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.surface.background.light,
    },
  },
}))(TableCell)
