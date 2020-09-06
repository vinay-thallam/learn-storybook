import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'

export const StyledTable = withStyles({
  root: {
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: '0 5px',
    padding: '10px',
  },
})(Table)

export const ColumnHeader = withStyles(theme => ({
  root: {
    fontWeight: 'bold',
    border: 'none',
    padding: '5px',
    paddingLeft: '16px',
  },
}))(TableCell)

export const PriceColumnHeader = withStyles({
  root: {
    width: '132px',
    fontWeight: 'bold',
    border: 'none',
    padding: '5px',
  },
})(TableCell)

export const FirstCellInRow = withStyles({
  root: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    borderLeft: '1px solid rgba(224, 224, 224, 1)',
    height: '68px',
  },
})(TableCell)

export const MiddleCellInRow = withStyles({
  root: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    height: '68px',
  },
})(TableCell)

export const LastCellInRow = withStyles({
  root: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    borderBottom: '1px solid rgba(224, 224, 224, 1)',
    borderRight: '1px solid rgba(224, 224, 224, 1)',
    height: '68px',
  },
})(TableCell)
