import React, { Component } from "react";

export class Content extends Component {
  render() {
    return (
      <div className="content mt-50">
        <div className="search-block d-flex justify-between mb-40">
          <h1 className="fw-bold">Всі кросівки</h1>
          <div className="d-flex search ">
            <img src="/img/search.svg" alt="search" />
            <input className="" placeholder="Пошук..." type="text" />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
