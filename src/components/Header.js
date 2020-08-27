import React, { useState } from "react";

const NavbarBrand = () => {
  return <a href="/">TOURSERA</a>;
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

const Explore = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleExplore = () => setIsOpen(!isOpen);
  return (
    <button onMouseEnter={toggleExplore} className="btn btn-primary">
      <span>explore</span>
      <span>&#9660;</span>
      <Explored isOpen={isOpen} />
    </button>
  );
};

const Header = () => {
  return (
    <div>
      <NavbarBrand />
      <Explore />
    </div>
  );
};

export default Header;
