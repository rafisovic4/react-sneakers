import { NavLink } from "react-router-dom";
import { ArrowNextIcon, ArrowPrevIcon } from "../components/Icons/Icons";

const HomePage = () => {
  return (
    <>
      <section className="slider">
        <div className="wrapper">
          <div className="slides">
            <div className="slide">
              <div className="slide__left">
                <h2>Stan Smith, Forever!</h2>
                <NavLink className="button xl" to="/">
                    Купить 
                </NavLink>
              </div>
              <div className="slide__right">
                  <img src="" alt="Stan Smith" />
              </div>
            </div>
          </div>
          <div className="control">
            <button className="prev">
              <ArrowPrevIcon />
            </button>
            <button className="next">
              <ArrowNextIcon />
            </button>
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default HomePage;
