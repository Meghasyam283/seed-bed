import Navbar from "../Navbar/Navbar";
import "./cart.css";
function Cart() {
  return (
    <>
      <Navbar />
      <div className="all-cart-items">
        <h2>Shopping Cart</h2>
        <hr />
        <div className="cart-item">
          <div className="cart-item-img">
            <img src="https://i.postimg.cc/3wJqqLVh/pic1.jpg" alt="" />
          </div>
          <div className="item-details">
            <div className="cart-item-title-price">
              <p className="cart-item-title">Saguaro</p>
              <p>1098</p>
            </div>
            <p>in stock</p>
            <p>Eligible for FREE SHIPPING</p>
            <div className="cart-item-options">
              <div className="cart-quantity">
                <button>+</button>
                <p>0</p>
                <button>-</button>
              </div>
              <button>delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
