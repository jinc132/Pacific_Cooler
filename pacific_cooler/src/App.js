import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Collapse } from 'reactstrap';
import './App.css';
import SignIn from './signin.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    let renderFrontPage = () => {
      return(
        <div>
          <h3><b>What's Poppin'?</b></h3>
          <button><a href="/SignIn">Sign In</a></button>
          <button><a href="/SignIn">Create Account</a></button>
        </div >
      );
    }

    let menu = (
      <div className="App">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Switch>
            <Route exact path={"/"} render={renderFrontPage} />
            <Route path={"/SignIn"} Component={SignIn} />
            <Redirect to={"/"} />
        </Switch>
      </div >
    );

    return (
      <div>
        <header>
        </header>
        <main>
          {menu}
        </main>
      </div>
    );
  }
}
export default App;
