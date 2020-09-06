import React from 'react'
import PropTypes from 'prop-types'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import OfferingDetail from './OfferingDetail'

import {
  StyledTable,
  PriceColumnHeader,
  ColumnHeader,
  FirstCellInRow,
  MiddleCellInRow,
  LastCellInRow,
} from './styled-components'

const getTableRow = (row, columns) => {
  return (
    <TableRow key={row.productName}>
      {columns.map(({ accessor }, index, arr) => {
        const TableCell =
          index === 0
            ? FirstCellInRow
            : index === arr.length - 1
            ? LastCellInRow
            : MiddleCellInRow

        return accessor === 'productName' ? (
          <TableCell key={row[accessor]} component="th" scope="row">
            <OfferingDetail productName={row[accessor]} />
          </TableCell>
        ) : (
          <TableCell key={row[accessor]}>{row[accessor]}</TableCell>
        )
      })}
    </TableRow>
  )
}

const getTableColHeader = header => {
  return header === 'ONE-TIME' || header === 'RECURRING' ? (
    <PriceColumnHeader key={header}>{header}</PriceColumnHeader>
  ) : (
    <ColumnHeader key={header}>{header}</ColumnHeader>
  )
}

const ProductMappings = ({ columns, rowData }) => {
  return (
    <TableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map(({ header }, index) => {
              return getTableColHeader(header, index)
            })}
          </TableRow>
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
