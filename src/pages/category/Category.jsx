import React, { useState } from "react";
import "./category.scss";
import useFetch from "../../hooks";
import { NavLink } from "react-router-dom";

const Category = () => {
  let LIMIT = 4;
  let [count, setCount] = useState(1);
  console.log(count);
  let { data, loading, error } = useFetch(`/products?limit=${LIMIT * count}`);
  console.log(data?.products);
  let loadingItem = (
    <div className="loading__card">
      <div className="loading__img bg__animation"></div>
      <div className="loading__info">
        <div className="loading__text bg__animation"></div>
        <div className="loading__text bg__animation"></div>
        <div className="loading__text bg__animation"></div>
      </div>
    </div>
  );

  let categoryCard = data?.products.map((product) => (
    <div className="category__card" key={product.id}>
      <NavLink to={`/category/${product.id}`} className="category__card__img">
        <img src={product.images[0]} alt="" />
      </NavLink>
      <div className="category__card__info">
        <h3>{product.category}</h3>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  ));
  return (
    <div className="category">
      <div id="category__hero">
        <div className="container category__hero">
          <h1>Business</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore.
          </p>
          <h3>Blog {">"} Business</h3>
        </div>
      </div>
      <div className="category__body container">
        <input placeholder="Searching..." type="text" />
        {loading ? (
          <div className="loading__wrapper">
            {loadingItem}
            {loadingItem}
            {loadingItem}
            {loadingItem}
          </div>
        ) : (
          <></>
        )}
        <div className="category__body__cards">{categoryCard}</div>
        <button

          onClick={() => setCount((p) => p + 1)}
          className="see__more-btn"
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default Category;
