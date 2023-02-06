  
import {
  SearchIcon,
} from "../components/Icons/Icons";

import product from "../assets/product_1.png";

import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";

const HomePage = () => {
  return (
    <>
      <Slider />
      <section className="section catalog">
        <header className="section-header">
          <h2 className="section__title">Все кроссовки</h2>
          <div className="search-box">
            <div>
              <SearchIcon size={22} />
            </div>
            <input type="text" placeholder="Поиск..." />
          </div>
        </header>
        <div className="products">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
        </div>
      </section>
    </>
  );
};

export default HomePage;
