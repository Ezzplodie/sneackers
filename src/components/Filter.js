import React from "react";
import { motion } from "framer-motion";
export default function Filter(props) {
  const [filter, setFilter] = React.useState(false);
  const onClickFilter = () => {
    setFilter(!filter);
    console.log(filter);
  };
  return (
    <div className="filter-drawer ">
      <div className="container">
        <div className="filter-img">
          <motion.img
            onClick={onClickFilter}
            src="/img/filter.png"
            alt="#"
            width={30}
            height={30}
            className="filter-img cu-p"
            whileHover={{ scale: 1.2, rotate: 90 }}
            whileTap={{
              scale: 0.6,
              rotate: -80,
              borderRadius: "100%",
            }}
          />
        </div>
        {filter ? (
          <div className="filter-filter d-flex">
            {/* <img
              src="/img/filter.png"
              alt="#"
              width={20}
              height={20}
              className="filter-img"
            /> */}
            <p className="m-10 m-0">Відсортувати по:</p>

            <div className="filter-text d-flex">
              <b className="cu-p filter-text-item">Nike</b>
              <b className="cu-p filter-text-item">Puma</b>
              <b className="cu-p filter-text-item">Under-armour</b>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
