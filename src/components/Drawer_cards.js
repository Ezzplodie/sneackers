import React from "react";

export default function CardsCart() {
  return (
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
  );
}
