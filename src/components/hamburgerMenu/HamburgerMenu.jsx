import "./HamburgerMenu.css";
import PropTypes from "prop-types";

const HamburgerMenu = ({handleOpenMenu, isOpen}) => {
  return (
    <button
        className={`hamburger ${isOpen ? 'open' : ''}`}
        onClick={handleOpenMenu}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

HamburgerMenu.propTypes = {
    handleOpenMenu: PropTypes.func.isRequired, // Deve ser uma função
    isOpen: PropTypes.bool.isRequired, // Deve ser um booleano
  };

export default HamburgerMenu;
