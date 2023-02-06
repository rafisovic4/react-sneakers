import { useState } from "react";
import SLIDES from "../../data/SLIDES";
import { ArrowPrevIcon, ArrowNextIcon } from "../Icons/Icons";
import SlideItem from "./SlideItem/SlideItem";

const Slider = () => {
  const [items, setItems] = useState(SLIDES);
  const [currentIndex, setCurrentIndex] = useState(0);

  // .bind()

  const next = setCurrentIndex.bind(
    this,
    currentIndex >= items.length - 1 ? 0 : currentIndex + 1
  );
  const prev = setCurrentIndex.bind(
    this,
    currentIndex <= 0 ? items.length - 1 : currentIndex - 1
  );

  return (
    <section className="slider">
      <div className="wrapper">
        <div className="slides">
          <SlideItem item={items[currentIndex]} />
        </div>
        <div className="control">
          {currentIndex <= 0 || (
            <button onClick={prev} className="prev">
              <ArrowPrevIcon />
            </button>
          )}

          {currentIndex >= items.length - 1 || (
            <button onClick={next} className="next">
              <ArrowNextIcon />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Slider;
