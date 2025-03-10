/* eslint-disable react/prop-types */

import { routes } from "../../constant/nav";
import { Link } from "react-router";

const Menu = ({ menuStyle }) => {
  return (
    <menu className={menuStyle}>
      {routes.map(({ name, link, id }) => (
        <li key={id}>
          <Link to={link} className="text-secondary">
            {name}
          </Link>
        </li>
      ))}
    </menu>
  );
};

export default Menu;
