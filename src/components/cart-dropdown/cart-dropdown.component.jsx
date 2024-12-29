import { useSelector } from "react-redux";
import Button from "../button/button.jsx";
import CartItem from "../cart-item/cart-item.component.jsx";
import { useNavigate } from "react-router-dom";
import "./cart-dropdown.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector.js";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <div className="cart-dropdown-container">
      {/* cart items component */}
      <div className="cart-items" />
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
      ) : (
        <span>Your cart is empty</span>
      )}
      <Button onClick={goToCheckoutHandler}>CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
