import React from "react";
import "./CardItem.scss";
import { Button } from "./Button";
import { useStateValue } from "./StateProvider";

function CardItem({ id, image, title, price, category = null, description }) {
  // importing or using basket varible from the state and call add to basket action using dispatch
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        category,
        description,
      },
    });
  };

  return (
    <>
      <div className="cards-item-container">
        <div className="cards-item-wrapper">
          <img
            className="cards-item__img"
            src={image}
            alt="Product"
            // src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          />
          {category === null ? (
            <>
              <div className="cards-item__title">{title}</div>
              <div className="cards-item__price">€{price}</div>
              <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={addToBasket}
              >
                Add to Cart
              </Button>
            </>
          ) : (
            <div className="cards-item__category">{category}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default CardItem;
