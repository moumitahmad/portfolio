import '../style/App.css';

import MainContent from './MainContent';
import Navbar from './Navbar';
import ContactFooter from './ContactFooter';
import { motion } from 'framer-motion';


function Home() {
  const menuTitle = [
    {
      title: "MA",
      path:"hero"
    }
  ]
  const menuItems = [
    {
        title: "Über mich",
        path: "about"
    },
    {
        title: "Projekte",
        path: "all-projects"
    },
    {
        title: "Kontakt",
        path: "contact-footer"
    }
  ]

  return (
    <motion.div initial={{ opacity:0 }} animate={{opacity:1, duration:3 }} exit={{ opacity:0, duration:3 }}>
      <Navbar projectTitle={null} menuTitle={menuTitle} menuItems={menuItems} maxPixel={80}></Navbar>
      {/* <Hero></Hero> */}
      <MainContent className="main"></MainContent>
      <ContactFooter></ContactFooter>
    </motion.div>
  );
}

export default Home;
