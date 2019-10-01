import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions";

// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faSignInAlt,
  faUserPlus
} from "@fortawesome/free-solid-svg-icons";

const AuthButton = ({ user, logout }) => {
  let buttons = [];
  if (!user) {
    buttons = [
      <li key="loginButton" className="nav-item">
        <Link to="/login" className="nav-link">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Link>
      </li>,
      <li key="signupButton" className="nav-item">
        <Link to="/signup" className="nav-link">
          <FontAwesomeIcon icon={faUserPlus} /> Signup
        </Link>
      </li>
    ];
  }
  if (user) {
    buttons = [
      <>
        <span className="navbar-text">{user.username}</span>
        <Link to="/logout" className="nav-item" onClick={logout}>
          <span className="nav-link">
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </span>
        </Link>
      </>
    ];
  }

  return <ul className="navbar-nav ml-auto">{buttons}</ul>;
};

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);
