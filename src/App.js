import "./index.scss";
import Cards from "./components/Cards";
import Header from "./components/Header";
import Content from "./components/Content";
import Drawer from "./components/Drawer";
function App() {
  return (
    <div className="wrapper clear">
      <Drawer></Drawer>
      <Header></Header>
      <Content></Content>

      <div className="cards d-flex justify-center pb-50">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />

        <div className="card ">
          <div className="favoutite">
            <img src="/img/unliked.svg" alt="" />
          </div>
          <img width={133} height={112} src="/img/2.png" alt="" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between mt-5  align-center mb-40">
            <div className="card__inside d-flex flex-column pt-5  ">
              <p>Ціна:</p>
              <b>12 999 грн.</b>
            </div>
            <button className="mt-5">+</button>
          </div>
        </div>
        <div className="card ">
          <div className="favoutite">
            <img src="/img/unliked.svg" alt="" />
          </div>
          <img width={133} height={112} src="/img/3.png" alt="" />
          <p>Кроссовки Puma X Aka Boku Future Rider</p>
          <div className="d-flex justify-between mt-5  align-center mb-40">
            <div className="card__inside d-flex flex-column pt-5  ">
              <p>Ціна:</p>
              <b>8 499 грн.</b>
            </div>
            <button className="mt-5">+</button>
          </div>
        </div>
        <div className="card ">
          <div className="favoutite">
            <img src="/img/unliked.svg" alt="" />
          </div>
          <img width={133} height={112} src="/img/4.png" alt="" />
          <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
          <div className="d-flex justify-between mt-5  align-center mb-40">
            <div className="card__inside d-flex flex-column pt-5  ">
              <p>Ціна:</p>
              <b>8 999 грн.</b>
            </div>
            <button className="mt-5">+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
