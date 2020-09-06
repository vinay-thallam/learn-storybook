// import React from 'react';
// import SvgIcon from '@material-ui/core/SvgIcon';

// const OfferingIcon = props => {
//   return (
//     <SvgIcon {...props}>
//       <g fill="none" fillRule="evenodd">
//         <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)" />
//         <path
//           fill="#0F2E66"
//           d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//           transform="translate(-5 -5)"
//         />
//       </g>
//     </SvgIcon>
//   );
// };
// export default OfferingIcon;

import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

const OfferingIcon = props => {
  return (
    // <SvgIcon {...rest}>
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
      >
        <g fill="none" fillRule="evenodd">
          <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)" />
          Add a comment to this line
          <path
            fill="#0F2E66"
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            transform="translate(-5 -5)"
          />
        </g>
      </svg>
    </SvgIcon>
  )
}
export default OfferingIcon

// import React from 'react';
// import SvgIcon from '../../SvgIcon';

// export default function OfferingIcon({ ...rest }) {
//   return (
//     <SvgIcon {...rest}>
//       <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
//         <g fill="none" fillRule="evenodd">
//           <path d="M0 0L24 0 24 24 0 24z" transform="translate(-5 -5)" />
//                 Add a comment to this line
//           <path
//             fill="#0F2E66"
//             d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
//             transform="translate(-5 -5)"
//           />
//         </g>
//       </svg>
//     </SvgIcon>
//   )
