import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TestRedux from './pages/TestRedux';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-redux" element={<TestRedux />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
