import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div className="cart-icon-container">
      <img
        className="shopping-icon"
        src="/shopping-bag.svg"
        alt="shopping-icon"
      />
      <span className="item-count">0</span>

    </div>
  );
};

export default CartIcon;
