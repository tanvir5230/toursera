import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, FormGroup, Badge } from "reactstrap";

const NavbarBrand = () => {
  return (
    <a href="/" className="d-inline-block">
      <img src="images/logo.png" alt="" width="200px" className="" />
    </a>
  );
};

const Search = () => {
  return (
    <div className="d-inline-block ml-auto bg-white text-dark border rounded-pill">
      <span className="d-md-inline d-none border-0">
        <i className="fa fa-search px-3"></i>
        <input type="text" className="border-0 rounded-pill py-2" />
      </span>
    </div>
  );
};

const Login = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleLogin}>
      <ModalHeader toggle={props.toggleLogin}>
        <h1>Login</h1>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
            type="text"
            name="login"
            id="login"
            className="form-control"
            placeholder="username"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="password"
          />
        </FormGroup>
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="login"
        />
        <p>
          don't have an account? <a href="/">create one</a>
        </p>
      </ModalBody>
    </Modal>
  );
};
const Signup = (props) => {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleSignup}>
      <ModalHeader toggle={props.toggleSignup}>
        <h1>sign up</h1>
      </ModalHeader>
      <ModalBody>
        <FormGroup>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="form-control"
            placeholder="firstname"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="form-control"
            placeholder="lastname"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="text"
            name="login"
            id="login"
            className="form-control"
            placeholder="email"
          />
        </FormGroup>
        <FormGroup>
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder="password"
          />
        </FormGroup>
        <input
          type="submit"
          className="btn btn-primary form-control"
          value="signup"
        />
      </ModalBody>
    </Modal>
  );
};

const Header = (props) => {
  const [isLoginOpen, setLogin] = useState(false);
  const toggleLogin = () => setLogin(!isLoginOpen);
  const [isSignupOpen, setSignup] = useState(false);
  const toggleSignup = () => setSignup(!isSignupOpen);
  const [isMenuOpen, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!isMenuOpen);
  return (
    <React.Fragment>
      <div className="bg-dark border-bottom text-white py-3 d-flex justify-content-between">
        <div>
          <span className="btn text-white" onClick={toggleMenu}>
            <i className="fa fa-bars"></i>
          </span>
          <NavbarBrand />
        </div>
        <div className="d-none d-md-inline-block">
          <Search />
          <span className="d-inline-block ml-auto btn text-white">
            <i className="fa fa-cart-plus fa-2x"></i>
            {props.totalCourse > 0 ? (
              <Badge color="danger">{props.totalCourse}</Badge>
            ) : (
              <span></span>
            )}
          </span>
          <div className="d-none d-md-inline-block pr-3">
            <button
              className="btn btn-outline-primary rounded-pill mx-2"
              onClick={toggleLogin}
            >
              login
            </button>
            <button
              className="btn btn-outline-success rounded-pill"
              onClick={toggleSignup}
            >
              Signup
            </button>
          </div>
        </div>
        <div className="d-md-none">
          <i className="fa fa-search d-md-none p-2"></i>
          <span className="btn text-white ">
            <i className="fa fa-cart-plus fa-2x"></i>
            {props.totalCourse > 0 ? (
              <Badge color="danger">{props.totalCourse}</Badge>
            ) : (
              <span></span>
            )}
          </span>
        </div>

        <Login isOpen={isLoginOpen} toggleLogin={toggleLogin} />
        <Signup isOpen={isSignupOpen} toggleSignup={toggleSignup} />
      </div>
    </React.Fragment>
  );
};

export default Header;
