import React from "react";

export default function Drawer({
  props,
  onCloseCart,
  onCloseItem,
  onRemove,
  counter,
  items = [],
}) {
  return (
    <div className="overlay">
      <div className="drawer p-20">
        <div className="d-flex justify-between">
          <h5>Корзина</h5>
          <img
            onClick={onCloseCart}
            className="cu-p"
            src="/img/button.svg"
            alt=""
          />
        </div>
        <div className="drawer-items">
          {items.map((obj) => (
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src={obj.imageUrl} alt="" />
              <div className="d-flex flex-column ml-20">
                <p>{obj.title}</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">{obj.price} грн.</span>
                  <button className="mr-20">
                    <img
                      src="/img/button.svg"
                      alt=""
                      onClick={() => onRemove(obj.id)}
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <ul className="cartTotalBlock">
          <li className="d-flex">
            <span>Разом:</span>
            <div></div>
            <b>{counter ? counter + " грн." : "Добавте товар в корзину :)"}</b>
          </li>
          <li className="d-flex">
            <span>Податок 5%: </span>
            <div> </div>
            <b></b>
          </li>
        </ul>
        <div>
          <div className="cartButton d-flex justify-between">
            <p className="text">Оформити замовлення</p>
            <img className="arrow" src="/img/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
