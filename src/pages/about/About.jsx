import React from "react";
import "./about.scss";
import aboutImg1 from "../../assets/images/about/about1.svg";
import aboutImg2 from "../../assets/images/about/about2.svg";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__infos">
          <div className="about__infos__card">
            <h4 className="about__info__name">Our mision</h4>
            <h2 className="about__info__title">
              Creating valuable content for creatives all around the world
            </h2>
            <p className="about__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="about__infos__card">
            <h4 className="about__info__name">Our Vision</h4>
            <h2 className="about__info__title">
              A platform that empowers individuals to improve
            </h2>
            <p className="about__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
        <div className="about__cards">
          <div className="about__card">
            <h4 className="about__name">Our team of creatives</h4>
            <h2 className="about__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h2>
            <p className="about__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
          <div className="about__card">
            <img src={aboutImg1} alt="" />
          </div>
          <div className="about__card">
            <img src={aboutImg2} alt="" />
          </div>
          <div className="about__card">
            <h4 className="about__name">Our team of creatives</h4>
            <h2 className="about__title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h2>
            <p className="about__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
              blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
              At risus viverra adipiscing at in tellus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
