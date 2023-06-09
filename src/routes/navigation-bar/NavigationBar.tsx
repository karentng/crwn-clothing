import { Outlet } from "react-router";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import './navigation-bar.scss';

const NavigationBar = () => {
  return(
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <CrwnLogo className="logo"/>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>Shop</Link>
          <Link className="nav-link" to='/contact'>Contact</Link>
          <Link className="nav-link" to='/sign-in'>Sign In</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;