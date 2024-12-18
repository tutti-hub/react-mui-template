import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './main.css';
import App from './App.jsx';
import store from './state/store.js';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>
);
