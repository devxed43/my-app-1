import Button from "../button/button.jsx";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      {/* cart items component */}
      <div className="cart-items" />
      <Button>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
