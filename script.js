import { createRoot } from "react-dom/client";
import "./style.css";
import React, { Children } from "react";

const Cards = (props) => {
  const {key,title, thumbnail, brand, price } = props;
  return (
    <>
    <div className="container" key={key} >
      <div className="card">
        <img src={thumbnail} alt="image" />
        <div className="detail">
          <h3>{title}</h3>
          <p>{brand}</p>
          <p>
            <b>${price}</b>
          </p>
        </div>
      </div>
    </div>
    </>

  );
};

const root = createRoot(document.querySelector("#root"));

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     const conyainer2 = data.products.map((product) => {
//       return (
//         <Cards
//           id={product.id}
//           thumbnail={product.thumbnail}
//           brand={product.brand}
//           title={product.title}
//           price={product.price}
//         />
//       );
//     });
//     root.render(<div className="cards">{conyainer2}</div>);
//   });

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    root.render(
      <div className="cards">
        {data.products.map((product) => {
          return (
            <Cards
             key={product.id}
              thumbnail={product.thumbnail}
              brand={product.brand}
              title={product.title}
              price={product.price}
            />
          );
        })
        }
      </div>
    );
  });
