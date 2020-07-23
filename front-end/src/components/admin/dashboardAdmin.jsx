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
import ActuAdmin from "./actuAdmin";
import SiteCardAdmin from "./siteCardAdmin";

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
              <NavItem  className="linkNavBarAdmin">
                <AddActu />
              </NavItem>
              <NavItem className="linkNavBarAdmin">
                <AddSite />
              </NavItem>
            </Nav>
            <NavItem>
              <NavLink>
                <Link to="/" className="linkNavBar NavBarAdminLast">
                  <img src="https://user-images.githubusercontent.com/57908921/88237718-206b3b00-cc80-11ea-9032-4bc5e7add012.png" alt="Home" />
                </Link>
              </NavLink>
            </NavItem>
          </Collapse>
        </Navbar>
      </div>
      <div className="DashboardMidlle">
        <div className="DashboardAdminLeft">
          <div className="LinkDivDashboardAdminLeft">
            <AddSite />
          </div>
          <div className="LinkDivDashboardAdminLeft">
            <AddActu />
          </div>
        </div>
        <div className="DashboardAdminRight">
          <div className="ColumnMidlleDashboard ColumnSite">
            <SiteCardAdmin />
          </div>
          <div className="ColumnMidlleDashboard ColumnActu">
            <ActuAdmin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
