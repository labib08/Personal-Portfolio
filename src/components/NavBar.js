import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon2 from '../assets/img/facebook.svg';
import navIcon4 from '../assets/img/github.svg';
import logo from '../assets/img/github_dp.png';
import navIcon3 from '../assets/img/insta.svg';
import navIcon1 from '../assets/img/link_icon.svg';

const NavBar = () => {

    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src = {logo} className="gitHub-dp" alt = "Logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className = "navbar-toggle-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                <span className = "navbar-text">
                    <div className = "social-icon">
                        <a href = "https://www.linkedin.com/in/itmam-khan-labib-033a9a221" target="_blank" rel="noopener noreferrer"><img src = {navIcon1} alt = ""/> </a>
                        <a href = "https://www.facebook.com/labib.itmam" target="_blank" rel="noopener noreferrer"><img src = {navIcon2} alt = ""/> </a>
                        <a href = "https://www.instagram.com/labib_08" target="_blank" rel="noopener noreferrer"><img src = {navIcon3} alt = ""/> </a>
                        <a href = "https://www.github.com/labib08" target="_blank" rel="noopener noreferrer"><img src = {navIcon4} alt = ""/> </a>
                    </div>

                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;