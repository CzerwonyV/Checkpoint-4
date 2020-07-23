import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { Link } from "react-router-dom";
import './admin.css';
import AddSite from "./modalAdd/addSite";
import AddActu from "./modalAdd/addActu";

const DashboardAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="DashboardAdminContent">
      <div className="NavBarBack">
        <Navbar className="NavBarContent NavBarContentDashboard" light expand="md">
          <NavbarBrand>
            <Link className="linkTitleNavBar" to="/dashboardadmin">
              Dashboard
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/" className="linkNavBar linkNavBarAdmin" >
                    Site
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/" className="linkNavBar linkNavBarAdmin">
                    Actu
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavItem>
            <NavLink>
              <Link to="/" className="linkNavBar NavBarAdminLast">
                <img src="https://user-images.githubusercontent.com/57908921/88237718-206b3b00-cc80-11ea-9032-4bc5e7add012.png" alt="Home" />
              </Link>
            </NavLink>
          </NavItem>
        </Navbar>
      </div>
      <div className="DashboardMidlle">
        <div className="DashboardAdminLeft">
          <div className="LinkDivDashboardAdminLeft">
            <Link to="/" className="linkNavBarAdminLeft">
              Site
            </Link>
          </div>
          <div className="LinkDivDashboardAdminLeft">
            <Link to="/" className="linkNavBarAdminLeft">
              Actu
            </Link>
          </div>
        </div>
        <div className="DashboardAdminRight">
          <AddSite />
          <AddActu />
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
