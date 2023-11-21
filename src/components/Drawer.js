import React, { Component } from "react";

export class Drawer extends Component {
  render() {
    return (
      <div className="overlay">
        <div className="drawer p-20">
          <div>
            <h5>Корзина</h5>
          </div>
          <div className="drawer-items">
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex   ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="drawer-item d-flex  ">
              <img width={70} height={70} src="/img/1.png" alt="" />
              <div className="d-flex flex-column ml-20">
                <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                <div className="justify-between d-flex">
                  <span className="fw-bold mt-10">12 999 грн.</span>
                  <button className="mr-20">
                    <img src="/img/button.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <ul className="cartTotalBlock">
            <li className="d-flex">
              <span>Разом:</span>
              <div></div>
              <b>8 499 грн.</b>
            </li>
            <li className="d-flex">
              <span>Податок 5%: </span>
              <div></div>
              <b>424 грн.</b>
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
}

export default Drawer;
