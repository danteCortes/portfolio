import { Container, Navbar, Nav } from "react-bootstrap";
import "./styles/App.css";
import Profile from "./pages/aboutMe/Profile";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contactMe/ContactMe";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Container style={{marginTop: '20px'}}>
        <Navbar expand="lg" sticky='top' className='mt-3 bg-redblack' style={{borderRadius: '15px'}}>
          <Container>
            <Navbar.Brand href="#about-me"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{fontSize: '20px'}}>
                <Link to="/" className="nav-link" style={{color: '#FFFEF4'}}>Acerca de mi</Link>
                <Link to="/projects" className="nav-link" style={{color: '#FFFEF4'}}>Mis Proyectos</Link>
                <Link to="/contact" className="nav-link" style={{color: '#FFFEF4'}}>Contactarme</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Profile/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <footer className="footer mt-auto py-3 mt-3 bg-redblack fixed-bottom">
          <div className="container-fluid text-center">
            <span className="color-light">Copyright 2022 All Rights Reserved by Dante Cortés</span>
          </div>
        </footer>
      </Container>
    </BrowserRouter>
  )
}

export default App
