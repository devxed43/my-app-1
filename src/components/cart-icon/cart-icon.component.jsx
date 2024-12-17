import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  // toggle function
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <img
        className="shopping-icon"
        src="/shopping-bag.svg"
        alt="shopping-icon"
        onClick={toggleIsCartOpen}
      />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
