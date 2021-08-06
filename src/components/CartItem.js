import React from "react";
import { Button } from "./Button";
import { useStateValue } from "./StateProvider";
import "./CartItem.scss";

function CartItem({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  // const
  return (
    <>
      <div className="cart-item-container">
        <div className="cart-item-wrapper">
          <img
            className="cart-item__img"
            src={image}
            alt="Product"
            // src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />
          <div className="cart-item__title">{title}</div>
          <div className="cart-item__price">€{price}</div>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
            onClick={() => dispatch({ type: "REMOVE_FROM_BASKET", id })}
          >
            Remove
          </Button>
          <div>
            {/* <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={decreaseItem}
            >
              -
            </Button>
            <div>0</div>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--medium"
              onClick={incrementItem}
            >
              +
            </Button> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
