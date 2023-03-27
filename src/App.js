import React from 'react';
import './style/App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from '@mui/material/styles';

import Home from './components/Home';
import ProjectDetail from './components/detail-page/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import theme from './style/theme';


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatePresence>
        <ThemeProvider theme={theme}>
          <Routes>
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/project/:id" element={<ProjectDetail />} />
          </Routes>
        </ThemeProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
