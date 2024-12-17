/* eslint-disable no-unused-vars */
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import "./navigation.styles.scss";

const Navigation = () => {
  // tells us our current user
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <img src="/crown.svg" alt="crown" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>

        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
