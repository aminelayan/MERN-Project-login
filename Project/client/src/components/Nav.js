import React, { useEffect, useState } from 'react'
import { Nav , Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import logoele1 from '../assets/logoele1.png';

const Header = props => {
    const navigate = useNavigate()
    const [loggedInUser, setLoggedInUser] = useState(null);
    useEffect(() => {
        axios
          .get("http://localhost:8000/api/users/loggedin", {
            withCredentials: true,
          })
          .then((res) => {
            localStorage.setItem('user', JSON.stringify(res.data.user));
            setLoggedInUser(res.data.user);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },[]);

      const logout = (e) => {
        axios
          .get("http://localhost:8000/api/users/logout", { withCredentials: true })
          .then((res) => {
            console.log(res);
            localStorage.clear()
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    

    const styles = {
        img: {
            width: "100px",
            height: "30px",
            
        },
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                {/* <Navbar.Brand href="/"><img src={logoele1} alt="Logoele" style={styles.img} /></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/valid">Create Poll</Nav.Link>
                    </Nav>
                    {loggedInUser != null?
                            <Nav>
                                <Nav.Link onClick={logout}>Log Out</Nav.Link>
                                <Nav.Link href="/">Welcome, {loggedInUser.firstName}</Nav.Link>
                            </Nav>
                            :                     
                            <Nav>
                                <Nav.Link href="/login">Login</Nav.Link>
                                <Nav.Link eventKey={2} href="/registration">Sign up</Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
