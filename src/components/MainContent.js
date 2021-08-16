
import { Container } from '@material-ui/core';


import About from './About';
import Projects from './Projects';


function MainContent() {

  return (
    <div className="main-content">
      <Container maxWidth="md">
        <About></About>
        <Projects></Projects>
      </Container>
    </div>
  )
}

export default MainContent;
