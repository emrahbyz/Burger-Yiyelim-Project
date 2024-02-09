import MenuItem from "../Components/MenuItem";
import React from "react";
import { dates } from "../Data/dates";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Burgerlerimiz</h1>
      <div className="menuList">
        {dates.map((burger, key) => {
          return (
            <MenuItem
              key={key}
              image={burger.image}
              name={burger.name}
              content={burger.content}
              price={burger.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
