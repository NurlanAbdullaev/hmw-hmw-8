import React from "react";
import { Movies } from "../Movies/Movies";

export const Main = ({ deleteItem, datas }) => {
  return (
    <ul>
      {datas.map((elem) => {
        return (
          <Movies
            key={elem.id}
            id={elem.id}
            img={elem.img}
            title={elem.title}
            rating={elem.rating}
            deleteItem={deleteItem}
          />
        );
      })}
    </ul>
  );
};
