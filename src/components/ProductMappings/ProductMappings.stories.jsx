import { ProductMappings } from '.'
import React from 'react'
import data from './data'

export default {
  component: ProductMappings,
  title: 'Design System|ProductMappings',
  excludeStories: /.*Data$/,
}
const getTableData = () => {
  const {
    productOfferingQualificationItem,
  } = data.productOfferingQualificationItemContainer[0]

  return {
    columns: [
      { header: 'TOP SELLERS', accessor: 'productName' },
      { header: 'ONE-TIME', accessor: 'oneTimePrice' },
      { header: 'RECURRING', accessor: 'recurringPrice' },
    ],
    rowData: productOfferingQualificationItem.map(({ productOffering }) => {
      const { name, productOfferingPrice } = productOffering

      const productDetail = {
        productName: name,
        oneTimePrice: '-',
        recurringPrice: '-',
      }

      productOfferingPrice.forEach(({ priceType, price: { value } }) => {
        if (priceType === 'Recurring') {
          productDetail.recurringPrice = value.toString()
        }
        if (priceType === 'OneTime') {
          productDetail.oneTimePrice = value.toString()
        }
      })

      return productDetail
    }),
  }
}

export const Default = () => {
  return (
    <div>
      <ProductMappings {...getTableData()} />
    </div>
  )
}
