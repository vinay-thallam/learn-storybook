import React from 'react'
import OfferingIcon from './Icons/OfferingIcon'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  text: {
    ...theme.typography.h6,
    fontWeight: 500,
    textAlign: 'left',
    paddingLeft: theme.spacing(1),
  },
  subText: {
    ...theme.typography.body2,
    textAlign: 'left',
    maxWidth: theme.spacing(80),
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down(theme.breakpoints.values.md)]: {
      maxWidth: theme.spacing(40),
    },
    [theme.breakpoints.down(theme.breakpoints.values.sm)]: {
      maxWidth: theme.spacing(20),
    },
  },
  offeringIcon: {
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
  infoIcon: {
    fontSize: theme.typography.body2.fontSize,
    marginLeft: theme.spacing(1),
  },
}))

const OfferingDetail = ({ productName }) => {
  const classes = useStyles()

  return (
    <Grid container alignItems="center">
      <Grid item>
        <OfferingIcon className={classes.offeringIcon} />
      </Grid>
      <Grid item>
        <Typography className={classes.text}>
          {productName}
          <OfferingIcon className={classes.infoIcon} />
        </Typography>
        <Typography className={classes.subText}>
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
