import React from "react";
import "./home.scss";
import img from "../../assets/images/home/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import { POPULAR, CATEGORY } from "../../static";

const Home = () => {
  const popularData = POPULAR?.map((el) => (
    <div key={el.id} className="home__blogs__card">
      <div className="home__blogs__card__img">
        <img src={el.img} alt="" />
      </div>
      <div className="home__blogs__card__info">
        <p className="home__blogs__card__desc">{el.desc}</p>
        <h2 className="home__blogs__card__title">{el.title}</h2>
        <p className="home__blogs__card__text">{el.text}</p>
      </div>
    </div>
  ));

  const categoryData = CATEGORY?.map((el) => (
    <div key={el.id} className="home__category__card">
      <div className="home__category__card__img">
        <img src={el.img} alt="" />
      </div>
      <div className="home__category__card__info">
        <h3 className="home__category__card__title">{el.title}</h3>
        <p className="home__category__card__desc">{el.text}</p>
      </div>
    </div>
  ));

  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `url("${img}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero__left container">
          <p className="hero__left__desc">Posted on startup</p>
          <h1 className="hero__left__titl">
            Step-by-step guide to choosing great font pairs
          </h1>
          <p className="hero__left__desc">
            By <span>James West</span> | May 23, 2022{" "}
          </p>
          <p className="hero__left__text">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="hero__left__btn">Read More</button>
        </div>
      </section>

      <section className="home__blogs container">
        <h1 className="home__blogs__title">Popular blogs</h1>
        <div className="home__blogs__cards">{popularData}</div>
      </section>

      <section className="home__category container">
        <h1 className="home__category__title">Choose A Catagory</h1>
        <div className="home__category__cards">{categoryData}</div>
      </section>
    </>
  );
};

export default Home;
