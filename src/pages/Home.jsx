import { Button, Container, Paper, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { NavLink } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Container>
        <Paper
          elevation={false}
          sx={{ p: 10, m: 4, bgcolor: grey[200], borderRadius: 5 }}>
          <Typography variant="h1">React Template</Typography>
          <Typography variant="h3" pl={4}>
            + MUI
          </Typography>
          <Typography variant="h3" pl={4}>
            + Redux Toolkit
          </Typography>
          <Typography variant="h3" pl={4}>
            + React Router
          </Typography>
          <Button
            component={NavLink}
            to="test-redux"
            sx={{
              mt: 5,
              px: 5,
              fontSize: '1.5rem',
              borderRadius: 5,
            }}>
            Demo
          </Button>
        </Paper>
      </Container>
    </>
  );
}
