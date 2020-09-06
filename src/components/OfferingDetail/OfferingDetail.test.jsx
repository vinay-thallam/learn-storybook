import React from 'react'
import ReactDOM from 'react-dom'
import { createMount } from '@material-ui/core/test-utils'
import OfferingDetail from './OfferingDetail'
import Typography from '@material-ui/core/Typography'

describe('OfferingDetail', () => {
  let mount

  beforeEach(() => {
    mount = createMount({ strict: false })
  })

  afterEach(() => {
    mount.cleanUp()
  })

  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<OfferingDetail productName={'Sample'} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('should display the productName', () => {
    const offeringDetail = mount(
      <OfferingDetail productName={'Samsung Handset'} />
    )
    expect(offeringDetail.find(Typography).first().text()).toBe(
      'Samsung Handset'
    )
  })

  it('should display the description', () => {
    const placeHolderText = 'A placeholder to add some details to this offering'
    const offeringDetail = mount(<OfferingDetail productName={'Sample'} />)
    expect(offeringDetail.find(Typography).last().text()).toBe(placeHolderText)
  })
})
