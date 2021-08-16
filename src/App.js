import React from 'react';
import './style/App.css';

import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import {AnimatePresence} from 'framer-motion';

import theme from './style/theme';
import Home from './components/Home';
import ProjectDetail from './components/detail-page/ProjectDetail';


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <ScrollToTop />
            <Switch>
              <AnimatePresence> {/* exitBeforeEnter */}
                <Route path="/portfolio/" component={Home} exact />
                <Route path="/portfolio/project/:id" component={ProjectDetail} key=":id" />
                {/* <Route component={Error} /> */}
              </AnimatePresence>
            </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
