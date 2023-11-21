import React, { Component } from "react";

export class Cards extends Component {
  render() {
    return (
      <div className="card ">
        <div className="favoutite">
          <img src="/img/unliked.svg" alt="" />
        </div>
        <img width={133} height={112} src="/img/1.png" alt="" />
        <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
        <div className="d-flex justify-between mt-5  align-center mb-40">
          <div className="card__inside d-flex flex-column pt-5  ">
            <p>Ціна:</p>
            <b>12 999 грн.</b>
          </div>
          <button className="mt-5">+</button>
        </div>
      </div>
    );
  }
}

export default Cards;
