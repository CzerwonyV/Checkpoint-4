import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import ContactDestock from "../contact/contactDestock";
import BtnGithub from "../button/btnGithub";
import BtnLinkedin from "../button/btnLinkedin";
import BtnTwitter from "../button/btnTwitter";
import "./navbar.css";

const NavBarCV = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="NavBarBack">
        <Navbar className="NavBarContent" light expand="md">
          <NavbarBrand>
            <Link className="linkTitleNavBar" to="/">
              Victor Veyrier
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link className="linkNavBar" to="/cv">
                    CV
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="ContactMobil">
                  <Link to="/contact">
                    Contact
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="ContactDestock">
                <ContactDestock />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <a
                    className="linkNavBar"
                    href="https://github.com/CzerwonyV/CzerwonyV/files/4878259/VictorVeyrier.pdf"
                    download
                  >
                    <p className="linkNavBarPDFMobile">CV en format PDF</p>
                  </a>
                </NavLink>
              </NavItem>
            </Nav>
            <NavItem className="IconNav">
              <BtnTwitter />
            </NavItem>
            <NavItem className="IconNav">
              <BtnLinkedin />
            </NavItem>
            <NavItem className="IconNav">
              <BtnGithub />
            </NavItem>
            <NavbarText id="TextNavBar">Développement Web</NavbarText>
          </Collapse>
        </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
    token: state.reducer.token,
  });

export default connect(mapStateToProps)(NavBarCV);
