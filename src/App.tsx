import React from 'react';
import './App.css';
import Router from './routes/sections';
import { BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme';
function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
    <Router />
    </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;
