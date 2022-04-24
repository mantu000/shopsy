import React from 'react'
import {Navbar, Nav, Container,} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {FcHome} from "react-icons/fc";
import {SiAboutdotme} from "react-icons/si";
import {MdOutlineProductionQuantityLimits} from "react-icons/md";
import {VscAccount} from "react-icons/vsc";
import {SiGnuprivacyguard} from "react-icons/si";
import {RiLogoutCircleLine} from "react-icons/ri";


import './Header.css';

export default function Header() {

  const navigate=useNavigate();

  const Logout =()=>{
    window.localStorage.clear();
    alert("You have successfully logged out your account.")
    navigate('/login_page');
  }

  return (
    <div>
      <Navbar className="mysection">
        <Container>
          {/* <Navbar.Brand as={Link} to="/" className="heading">Navbar</Navbar.Brand> */}
          <Navbar.Brand className='logo'>
            <img src="../../../../../img/logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">

            {/* <Form className="sear">
              <FormControl
                type="search"
                placeholder="Search Product..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            <Nav
              className="mypart"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link as={Link} to="/" className='icon'><FcHome/></Nav.Link>
              <Nav.Link as={Link} to="/About_page" className='icon'><SiAboutdotme/></Nav.Link>
              
                <Nav.Link as={Link} to="/product_page" className='icon'><MdOutlineProductionQuantityLimits/></Nav.Link>
                {/* <Nav.Link as={Link} to="/Buy_page" className=''>CONTACT US</Nav.Link> */}
                
                <Nav.Link as={Link} to="/Signup_page" className='icon'><SiGnuprivacyguard/></Nav.Link>
                <Nav.Link as={Link} to="/Login_page" className='icon'><VscAccount/></Nav.Link>
              


                <button onClick={Logout} className=''><RiLogoutCircleLine/></button>

            </Nav>
          

          </Navbar.Collapse>
        
        </Container>
      </Navbar>
    </div>
  )
}
