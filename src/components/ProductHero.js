import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../components/Button';
import Typography from './Typography';
import ProductHeroLayout from './ProductHeroLayout';
import { Link, animateScroll as scroll } from "react-scroll";

const backgroundImage =
  'https://cdn.dribbble.com/users/1107982/screenshots/15590058/media/009849e098dfd3c036ca2a2dd40ab17f.png';

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', 
    backgroundPosition: 'center',
  },
  button: {
    minWidth: 200,
  },
  h5: {
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
});

function ProductHero(props) {
  const { classes } = props;

  return (
    <ProductHeroLayout backgroundClassName={classes.background}>
      {/* Increase the network loading priority of the background image. */}
      <img style={{ display: 'none' }} src={backgroundImage} alt="increase priority" />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Connect. Grow. Together.
      </Typography>
      <Typography color="inherit" align="center" variant="h5" className={classes.h5}>
        Find coworkers near you, reach out and schedule a networking event. 
      </Typography>
      <Link
        activeClass="active"
        to="section1"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}>
          <Button
            color="secondary"
            variant="contained"
            size="large"
            className={classes.button}
          >
            Search
          </Button>
      </Link>
    </ProductHeroLayout>
  );
}

ProductHero.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductHero);