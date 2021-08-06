import React from "react";
import { Button } from "./Button";
import { useStateValue } from "./StateProvider";
import "./CartItem.scss";

function CartItem({ id, image, title, price }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="cart-item-container">
        <div className="cart-item-wrapper">
          <img className="cart-item__img" src={image} alt="Product" />
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
        </div>
      </div>
    </>
  );
}

export default CartItem;
