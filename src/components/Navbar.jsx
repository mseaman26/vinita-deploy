
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function AppNavbar() {
    return (
        <>
             <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>Vinita Navani</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link><Link to="/">About</Link></Nav.Link>
            <Nav.Link> <Link to="/projects">Projects</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            <Nav.Link><Link to="/resume">Resume</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
      );

}




