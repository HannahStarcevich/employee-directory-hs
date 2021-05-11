import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Typography from './Typography';
import TextField from './TextField';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://hannah-starcevich.com/">
        Designly LLC
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.orange.main,
  },
  container: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    display: 'flex',
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: 'flex',
  },
  icon: {
    width: 48,
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    '&:hover': {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  list: {
    margin: 0,
    listStyle: 'none',
    padding: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English',
  },
  {
    code: 'fr-FR',
    name: 'Français',
  },
];

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={2}
            >
              <Grid item className={classes.icons}>
                {/* <a href="https://material-ui.com/" className={classes.icon}> */}
                  <LinkedInIcon/> {/* </a> */}
                {/* <a href="https://twitter.com/MaterialUI" className={classes.icon}>
                  <img src="/static/themes/onepirate/appFooterTwitter.png" alt="Twitter" />
                </a> */}
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              About This Site
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="https://github.com/HannahStarcevich/employee-directory-hs">GitHub</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant="h6" marked="left" gutterBottom>
              Designer
            </Typography>
              <ul className={classes.list}>
                  <li className={classes.listItem}>
                    <Link href="http://www.hannah-starcevich.com/">Portfolio</Link>
                  </li>
                  <li className={classes.listItem}>
                    <Link href="https://hannahstarcevich.github.io/HannahStarcevich-Portfolio/Hannah-Starcevich_Web-Developer-Resume.pdf">Resume</Link>
                  </li>
                </ul>
            </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}