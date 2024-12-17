import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
      },
    },
  },
});

export default theme;
