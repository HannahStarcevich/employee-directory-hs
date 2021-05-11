import React from 'react';
import PropTypes from 'prop-types';
import PublicSharpIcon from '@material-ui/icons/PublicSharp';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import AppBar from './AppBar';
// import Toolbar, { styles as toolbarStyles } from './Toolbar';
import Toolbar from '@material-ui/core/Toolbar';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: {
    height: 64,
    [theme.breakpoints.up('sm')]: {
      height: 70,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 14,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <div />
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            className={classes.title}
            href=""
          ><PublicSharpIcon fontSize="large" />
            {' Global Reach'}
          </Link>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href=""
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href=""
            >
              {'Sign Up'}
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);