import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import CV from './components/CV/CV';
import ContactMobile from './components/contact/contactMobile';
import Home from './components/home/home';
import { connect } from 'react-redux';
import LoginAdmin from './components/admin/loginAdmin';
import NotFound from './components/admin/notfound';
import DashboardAdmin from './components/admin/dashboardAdmin';
import './App.css';

class App extends React.Component {
  withAuth = (Component) => {
    const { token } = this.props;
    const RedirectToError = () => (<Redirect to="/error" />);
    return (token != null ? Component : RedirectToError);
  };

  render() {
    const { withAuth } = this;
    return (
      <div className="AppContent">
        <Router>
          <Switch>
            <Route path="/cv" component={CV} />
            <Route path="/contact" component={ContactMobile} />
            <Route path="/dashboardadmin" component={withAuth(DashboardAdmin)} />
            <Route path="/adminlog" component={LoginAdmin} />
            <Route path="/error" component={NotFound} />
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.reducer.token,
});
export default connect(mapStateToProps)(App);