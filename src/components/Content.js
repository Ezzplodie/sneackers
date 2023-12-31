import React from "react";

export default function Content({
  onChangeSearch,
  props,
  searchValue,
  OnChangeFilter,
  searchFilterValue,
}) {
  return (
    <div className="content mt-50">
      <div className="search-block d-flex justify-between mb-40">
        <h1 className="fw-bold ">
          {searchValue ? `Пошук по запросу: "${searchValue}"` : "Всі кросівки"}
        </h1>

        <div className="d-flex search ">
          <img src="/img/search.svg" alt="search" />
          <input
            onChange={onChangeSearch}
            className=""
            placeholder="Пошук..."
          />
        </div>
      </div>
    </div>
  );
}
