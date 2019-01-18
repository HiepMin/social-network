import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';
import { path } from './../../config'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LogoutUser } from './../../actions';
import Avatar from './../Avatar';
class NavbarComponent extends Component {
  state = {
    isOpen: false
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { isAuthenticated, currentUser } = this.props.auth;
    return (
      <div>
        <Navbar color="light" light>
					<Link to={path.POSTS_PAGE}>Home</Link>
          {
            isAuthenticated ? (
              <Nav className="ml-auto" navbar>
                <NavItem componentclass="span" style={{ display: "flex", alignItems: "center" }}>
                  <Link to={`/profileid=${currentUser.id}`} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Avatar src={currentUser.avatar} alt={currentUser.username} />
                  </Link>
                  <button className="btn btn-outline-secondary btn-sm border-0" onClick={() => this.props.LogoutUser()}>Logout</button>
                </NavItem>
              </Nav>
            ) : (
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Link to={path.REGISTER_PAGE}>Register</Link>
                </NavItem>
                <NavItem>
                  <Link to={path.LOGIN_PAGE}>Login</Link>
                </NavItem>
              </Nav>
            )
          }
        </Navbar>
      </div>
    );
  }
}
export default connect(state => ({
  auth: state.auth
}), { LogoutUser })(NavbarComponent);