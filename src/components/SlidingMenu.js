import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const SlidingMenu = (props) => {
  return (
    <Modal
      className="sliding-menu position-absolute m-0 mt-5"
      isOpen={props.isOpen}
      toggle={props.toggleMenu}
    >
      <ModalHeader toggle={props.toggleMenu}>
        <h6>Catagories</h6>
      </ModalHeader>
      <ModalBody className="p-0">
        <a className="d-block p-2 border-bottom" href="/">
          front end development
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          back end development
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          math
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          physics
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          chemistry
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          bioloy
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          politics
        </a>
        <a className="d-block p-2 border-bottom" href="/">
          others
        </a>
      </ModalBody>
      <ModalFooter className="d-flex justify-content-center">
        <div className="d-md-none">
          <button
            className="btn btn-outline-primary rounded-pill mr-2"
            onClick={props.toggleLogin}
          >
            login
          </button>
          <button
            className="btn btn-outline-success rounded-pill"
            onClick={props.toggleSignup}
          >
            Signup
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default SlidingMenu;
