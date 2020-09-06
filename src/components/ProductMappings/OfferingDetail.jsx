import React from 'react'
import OfferingIcon from './Icons/OfferingIcon'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
// import StatusIcon from '../StatusIcon/StatusIcon'
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
  productName: {
    fontWeight: 'bold',
  },
  offeringIcon: {
    color: '#fff',
  },
  infoIcon: {
    verticalAlign: 'top',
    fontSize: '2em',
    color: '#0f2e66',
    marginLeft: '8px',
  },
}))
const OfferingDetail = ({ productName }) => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item>
        <span className={classes.offeringIconContainer}>
          <OfferingIcon />
        </span>
      </Grid>
      <Grid item>
        <Typography className={classes.productName}>
          {productName}
          {/* <StatusIcon variant="outlined" className={classes.infoIcon} /> */}
        </Typography>

        <Typography className={classes.root}>
          A placeholder to add some details to this offering
        </Typography>
      </Grid>
    </Grid>
  )
}
OfferingDetail.propTypes = {
  productName: PropTypes.string.isRequired,
}
export default OfferingDetail
