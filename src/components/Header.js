import React from "react";
import { Link } from "react-router-dom";
export default function Header(props) {
  return (
    <header className="d-flex justify-between p-40  ">
      <div className="headerLeft d-flex align-center">
        <img src="/img/logogo.png" alt="" className="mr-15" />
        <div className="headerInfo ">
          <h2 className="text-uppercase fw-bold ">UA sneackers</h2>
          <p>Магазин найкращого взуття</p>
        </div>
      </div>
      <ul className="d-flex align-center ">
        <li className="mr-30 cu-p align-center" onClick={props.onClickCart}>
          <img src="/img/cart.svg" alt="" />
          <span className="pl-10">
            {props.counter ? props.counter + " грн" : "пусто..."}
          </span>
        </li>
        <li>
          <img src="/img/like.svg" alt="" />
          <span className="pl-10">Закладки</span>
        </li>
      </ul>
    </header>
  );
}
