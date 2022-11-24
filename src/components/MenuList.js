import React from "react";
import "../style/MenuList.css"

const MenuList = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        const { id, name, img, price } = item;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={name} className="photo" />
            <div className="item-info">
              <header>
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
              </header>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default MenuList;