
import { Container } from '@mui/material';


import About from './About';
import Projects from './Projects';


function MainContent() {

  return (
    <div className="main-content">
      <Container maxWidth="false">
        <About></About>
        <Projects></Projects>
      </Container>
    </div>
  )
}

export default MainContent;
