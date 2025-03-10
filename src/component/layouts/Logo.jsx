/* eslint-disable react/prop-types */
import { Link } from "react-router";


const Logo = ({toggleMenu}) => {
  return (
    <>
      <Link to="/"  onClick={toggleMenu}>
        <img className="" src="/images/Staycation..svg" alt="Logo" />
      </Link>
    </>
  );
}

export default Logo
