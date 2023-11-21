import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header className="d-flex justify-between p-40 ">
        <div className="headerLeft d-flex align-center">
          <img src="/img/logo.svg" alt="" className="mr-15" />
          <div className="headerInfo ">
            <h2 className="text-uppercase fw-bold ">React sneackers</h2>
            <p>Магазин найкращого взуття</p>
          </div>
        </div>
        <ul className="d-flex align-center">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="" />
            <span className="pl-5">1200 грн.</span>
          </li>
          <li>
            <img src="/img/like.svg" alt="" />
            <span className="pl-5">Закладки</span>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
