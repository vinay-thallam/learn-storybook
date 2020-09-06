import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import Paper from '@material-ui/core/Paper'
import OfferingDetail from '../OfferingDetail/OfferingDetail'

import { makeStyles } from '@material-ui/core/styles'

import {
  StyledTable,
  StyledTableRow,
  StyledTableCell,
} from './styled-components'

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
