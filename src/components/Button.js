
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default withStyles((theme) => ({
  root: {
    borderRadius: 0,
    background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    fontWeight: theme.typography.fontWeightMedium,
    fontFamily: theme.typography.fontFamilySecondary,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: 'none',
    '&:active, &:focus': {
      boxShadow: 'none',
    },
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13),
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16),
  },
}))(Button);