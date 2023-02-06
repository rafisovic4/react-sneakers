import { NavLink } from "react-router-dom";

const SlideItem = ({ item }) => {
  return (
    <div
      className="slide"
      style={{
        backgroundColor: item.background,
      }}
    >
      <div className="slide__left">
        <h2>{item.text}</h2>
        <NavLink className="button xl" to={item.button.url}>
          {item.button.text}
        </NavLink>
      </div>
      <div className="slide__right">
        <img
          height={300}
          style={{
            maxHeight: 300,
            minHeight: 300
          }}
          src={item.url}
          alt={item.text}
        />
      </div>
    </div>
  );
};

export default SlideItem;
