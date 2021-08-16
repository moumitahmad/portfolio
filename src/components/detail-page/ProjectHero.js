import '../../style/App.css';
import { motion } from 'framer-motion';

function ProjectHero(props) {

  const project = props.project;

    return(
      <div id="hero">
      {/* <motion.div className="hero-text" initial={{ y: 200, opacity:0, scale:0 }} animate={{ y: 0, opacity:1, scale:1, transition: {duration: 1, ease: [0.6, 0.05, -0.01, 0.9]}}}>
        <h1 className="hero-title">{project.title}</h1>
      </motion.div> */}
      <div className="hero-image" style={{backgroundImage: "url(/portfolio/assets/project-media/" + project.image + ")"}}>
        <div className="hero-blur">
          <motion.div className="hero-text" initial={{ y: 200, opacity:0, scale:0 }} animate={{ y: 0, opacity:1, scale:1, transition: {duration: .5, ease: [0.6, 0.05, -0.01, 0.9]}}}>
            {/* <h1 className="hero-title">{project.title}</h1> */}
          </motion.div>
        </div>
      </div>
      </div>
    )
}

export default ProjectHero;