import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

const OfferingIcon = ({ ...rest }) => {
  return (
    <SvgIcon {...rest}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)" />
        <path
          fill="#0F2E66"
          d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
          transform="translate(-5 -5)"
        />
      </g>
    </SvgIcon>
  )
}
export default OfferingIcon
