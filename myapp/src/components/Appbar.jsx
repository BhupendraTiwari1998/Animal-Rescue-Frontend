import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import {Button} from 'react-bootstrap'

const Appbar = () => {

  const navigate = useNavigate()

  const clickHand =()=>{
    navigate("/sign-in")
  }

  return (
    <div>
      <Navbar expand="lg" className=" navbar1 py-4">
        <Container fluid>
          <Navbar.Brand href="#home"><img className='navImg' src="https://animal-rescue.cmsmasters.net/pet-shelter/wp-content/uploads/sites/5/2022/11/logo-pet-shelter.svg" alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto" variant='pills' defaultActiveKey={'/'} >
              <NavLink className='nav-link color1' to='/'>Home</NavLink>
              <NavLink className='nav-link color1' to='/adoption'>Adoption</NavLink>
              <NavLink className='nav-link color1' to='/aboutus'>About Us</NavLink>
              <NavLink className='nav-link color1' to='/ourblog'>Our Blog</NavLink>
              <NavLink className='nav-link color1' to='/shop'>Shop</NavLink>
              <NavLink className='nav-link color1' to='/contactus'>Contact Us</NavLink>
            </Nav>
              <Button onClick={clickHand}>Login</Button>
              {/* <button variant='pills' className='navbar2' onClick={clickHand}>Login</button> */}
            <h3 style={{ color: 'white', fontWeight: 'bolder' }}><IoSearch/></h3>
            <button className='navbar2'>Donate</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Appbar