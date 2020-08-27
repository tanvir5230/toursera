import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, FormGroup } from "reactstrap";

const NavbarBrand = () => {
  return (
    <a href="/" className="mr-4">
      <span>TOURSERA</span>
    </a>
  );
};

export const Explored = (props) => {
  if (props.isOpen) {
    return (
      <div>
        <h1>I am open</h1>
      </div>
    );
  } else {
    return <div></div>;
  }
};

const Explore = (props) => {
  return (
    <button onClick={props.toggleExplore} className="btn btn-primary">
      <span>explore </span>
      <span> &#9660;</span>
    </button>
  );
};

const Search = () => {
  return (
    <div className="d-inline-block mr-4">
      <input type="text" className="p-3" />
      <button className="btn btn-primary">
        <i className="fa fa-search"></i>
      </button>
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

const Header = () => {
  const [isLoginOpen, setLogin] = useState(false);
  const toggleLogin = () => setLogin(!isLoginOpen);
  const [isExploreOpen, setExplore] = useState(false);
  const toggleExplore = () => setExplore(!isExploreOpen);
  return (
    <React.Fragment>
      <div className="border-bottom bg-dark text-white">
        <div className="container d-flex justify-content-between">
          <div>
            <NavbarBrand />
            <Explore className="ml-4" toggleExplore={toggleExplore} />
          </div>
          <div>
            <Search />
            <button className="btn btn-outline-primary" onClick={toggleLogin}>
              <i className="fa fa-sign-in"></i>
              <span>login</span>
            </button>
          </div>
        </div>
      </div>
      <div>
        <Explored isOpen={isExploreOpen} />
        <Login isOpen={isLoginOpen} toggleLogin={toggleLogin} />
      </div>
    </React.Fragment>
  );
};

export default Header;
