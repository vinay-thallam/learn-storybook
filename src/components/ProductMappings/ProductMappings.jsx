import React from 'react'
import PropTypes from 'prop-types'
import TableContainer from '@material-ui/core/TableContainer'
import Table from '@material-ui/core/Table'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import Paper from '@material-ui/core/Paper'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import OfferingDetail from '../OfferingDetail/OfferingDetail'

const StyledTable = withStyles(theme => ({
  root: {
    tableLayout: 'fixed',
    borderCollapse: 'separate',
    borderSpacing: `0 ${theme.spacing(0.75)}px`,
    padding: theme.spacing(1),
  },
}))(Table)

const StyledTableRow = withStyles(theme => ({
  root: {
    boxShadow:
      '0 1px 3px 0 rgba(63, 63, 68, 0.15), 0 0 0 1px rgba(63, 63, 68, 0.05)',
  },
  head: {
    boxShadow: 'none',
  },
}))(TableRow)

const StyledTableCell = withStyles(theme => ({
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
      backgroundColor: '#fafbfc',
    },
  },
}))(TableCell)

const getTableRow = (row, columns) => {
  const classes = makeStyles(theme => ({
    offeringDetailCell: {
      paddingLeft: theme.spacing(3),
    },
  }))()

  return (
    <StyledTableRow key={row.productName}>
      {columns.map(({ accessor }, index, arr) => {
        return accessor === 'productName' ? (
          <StyledTableCell
            key={row[accessor]}
            scope="row"
            className={classes.offeringDetailCell}
          >
            <OfferingDetail productName={row[accessor]} />
          </StyledTableCell>
        ) : (
          <StyledTableCell key={row[accessor]}>{row[accessor]}</StyledTableCell>
        )
      })}
    </StyledTableRow>
  )
}

const getTableColHeader = header => {
  const classes = makeStyles(theme => ({
    productNameHeader: {
      paddingLeft: theme.spacing(3),
    },
    priceHeader: {
      width: theme.spacing(12),
    },
  }))()

  let className = {}
  if (header === 'ONE-TIME' || header === 'RECURRING') {
    className = classes.priceHeader
  } else if (header === 'TOP SELLERS') {
    className = classes.productNameHeader
  }

  return (
    <StyledTableCell className={className} key={header}>
      {header}
    </StyledTableCell>
  )
}

const ProductMappings = ({ columns, rowData }) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable>
        <TableHead>
          <StyledTableRow>
            {columns.map(({ header }, index) => {
              return getTableColHeader(header, index)
            })}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rowData.map(row => {
            return getTableRow(row, columns)
          })}
        </TableBody>
      </StyledTable>
    </TableContainer>
  )
}

ProductMappings.propTypes = {
  /** Column Headers for Product Mapping table */
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      accessor: PropTypes.string,
    })
  ).isRequired,
  /** Column RowData for Product Details(Name & Price) */
  rowData: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ProductMappings
