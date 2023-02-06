import { useState } from "react";
import { SearchIcon } from "../components/Icons/Icons";

import Product from "../components/Product/Product";
import Slider from "../components/Slider/Slider";
import PRODUCTS from "../data/PRODUCTS";

const HomePage = () => {
  const [products, setProducts] = useState(PRODUCTS);
  const [query, setQuery] = useState("");

  const filterProducts = products.filter((item) => item.name.toLowerCase().includes(query));

  const onChangeQuery = (event) => {
    setQuery(event.target.value.toLowerCase());
  };

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
            <input type="text" placeholder="Поиск..." value={query} onChange={(e) => onChangeQuery(e)}/>
          </div>
        </header>
        <div className="products">

          {
            filterProducts.length ? 
            (filterProducts.map((product) => {
              return (
                <Product key={product.id} product={product} />
              )
              
              })
            )

            :

            <h2 className="empty">По вашему запросу "{query}" ничего не найдено!</h2>
            
          }
        </div>
      </section>
    </>
  );
};

export default HomePage;
