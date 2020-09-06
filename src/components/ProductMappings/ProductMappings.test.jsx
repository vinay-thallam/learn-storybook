import React from 'react'
import ReactDOM from 'react-dom'
import { createMount } from '@material-ui/core/test-utils'
import ProductMappings from './ProductMappings'
import MockedOfferingDetail from './OfferingDetail'
import TableHead from '@material-ui/core/TableHead'
import TableCell from '@material-ui/core/TableCell'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'

jest.mock('./OfferingDetail', () => {
  return {
    __esModule: true,
    default: () => <>OfferingDetail View</>,
  }
})

describe('ProductMappings', () => {
  let mount

  const testProps = {
    columns: [
      { header: 'TOP SELLERS', accessor: 'productName' },
      { header: 'ONE-TIME', accessor: 'oneTimePrice' },
    ],
    rowData: [{ productName: 'one-plus', oneTimePrice: '5' }],
  }

  beforeEach(() => {
    mount = createMount({ strict: false })
  })

  afterEach(() => {
    mount.cleanUp()
  })

  afterAll(() => {
    jest.resetAllMocks()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ProductMappings {...testProps} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should render number of columns as expected', () => {
    const productMappings = mount(<ProductMappings {...testProps} />)
    const thead = productMappings.find(TableHead)
    expect(thead.find(TableCell)).toHaveLength(2)
  })

  it('should render number of rows as expected', () => {
    const productMappings = mount(<ProductMappings {...testProps} />)
    const tbody = productMappings.find(TableBody)
    expect(tbody.find(TableRow)).toHaveLength(1)
  })

  it('should render columns in a particular order', () => {
    const productMappings = mount(<ProductMappings {...testProps} />)
    const thead = productMappings.find(TableHead)
    expect(thead.find(TableCell).first().text()).toBe('TOP SELLERS')
    expect(thead.find(TableCell).last().text()).toBe('ONE-TIME')
  })

  it('should render corresponding value for a column', () => {
    const productMappings = mount(<ProductMappings {...testProps} />)
    const tbody = productMappings.find(TableBody)
    expect(tbody.find(TableRow).find(TableCell).first().text()).toBe(
      'OfferingDetail View'
    )
    expect(tbody.find(TableRow).find(TableCell).last().text()).toBe('5')
  })

  it('should render OfferingDetails View when product name is passed', () => {
    const testProps = {
      columns: [{ header: 'TOP SELLERS', accessor: 'productName' }],
      rowData: [{ productName: 'one-plus' }],
    }

    const productMappings = mount(<ProductMappings {...testProps} />)
    const tbody = productMappings.find(TableBody)
    expect(tbody.find(TableRow).find(TableCell).first().text()).toBe(
      'OfferingDetail View'
    )
  })
})
