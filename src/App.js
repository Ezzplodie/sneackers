import "./index.scss";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Content from "./components/Content";
import React from "react";
import Drawer from "./components/Drawer";
import axios from "axios";
import { motion } from "framer-motion";

function App() {
  const [priceCouner, setPriceCouner] = React.useState();
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const [favorie, setFavorite] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [filterOpened, setFilterOpened] = React.useState("");
  // const titleTest = "Nike";
  React.useEffect(() => {
    axios
      .get("https://65746482f941bda3f2afb0ff.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://65746482f941bda3f2afb0ff.mockapi.io/cartItems")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://65746482f941bda3f2afb0ff.mockapi.io/cartItems", obj);
    }
    setCartItems((prev) => [...prev, obj]);
    // axios.post("https://65746482f941bda3f2afb0ff.mockapi.io/cartItems", obj);
    // setCartItems((prev) => [...prev, obj]);
  };
  const onRemoveItem = (id) => {
    axios.delete(`https://65746482f941bda3f2afb0ff.mockapi.io/cartItems/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    // setCartItems((prev) => [...prev, obj]);
    console.log(id);
  };
  const onAddtoFavorite = (obj) => {
    setFavorite((prev) => [...prev, obj]);
    console.log("добавили");
    console.log(obj);
  };

  const onChangeSearch = (event) => {
    // console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const [visible, setVisible] = React.useState(true);
  const toggleVisibleList = () => {
    setVisible((visible) => !visible);
  };
  const chooseCategory = (category) => {
    console.log("hello");
  };

  React.useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);
    setPriceCouner(total);
  }, [cartItems]);
  const [filter, setFilter] = React.useState(false);
  const onClickFilter = () => {
    setFilter(!filter);
    console.log(filter);
  };

  return (
    <div className="wrapper clear">
      {cartOpened ? (
        <Drawer
          counter={priceCouner}
          items={cartItems}
          onCloseCart={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        ></Drawer>
      ) : null}

      <Header
        items={cartItems}
        counter={priceCouner}
        onClickCart={() => setCartOpened(true)}
      ></Header>
      <Content onChangeSearch={onChangeSearch} searchValue={searchValue} />
      <div>
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
                <p className="m-10 m-0">Відсортувати по:</p>

                <div className="filter-text d-flex">
                  <b
                    onClick={() => setFilterOpened("Nike")}
                    className="cu-p filter-text-item"
                  >
                    Nike
                  </b>
                  <b
                    onClick={() => setFilterOpened("Puma")}
                    className="cu-p filter-text-item"
                  >
                    Puma
                  </b>
                  <b
                    onClick={() => setFilterOpened("Under armour")}
                    className="cu-p filter-text-item"
                  >
                    Under armour
                  </b>
                  <b
                    onClick={() => setFilterOpened("")}
                    className="cu-p filter-text-item"
                  >
                    Всі
                  </b>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="section-cards"></div>
      <div className="container">
        <div className="cards">
          {items
            .filter((item) =>
              item.title
                .toLocaleLowerCase()
                .includes(filterOpened.toLocaleLowerCase())
            )

            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLocaleLowerCase())
            )
            .map((item, index) => (
              <Cards
                // key={index}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                onFavorite={(obj) => onAddtoFavorite(item)}
                onPlus={(obj) => onAddToCart(item)}
                onDelete={onRemoveItem}
                // favorited={true}
              ></Cards>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
