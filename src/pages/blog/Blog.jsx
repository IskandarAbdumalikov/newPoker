import React, { useEffect, useState } from "react";
import axios from "../../api/index";
import { useParams } from "react-router-dom";
import "./blog.scss";

const Blog = () => {
  let { id } = useParams();
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);
  console.log(data);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  let singleItem = (
    <div className="single__card">
      <img src={data?.thumbnail} alt="" />
      <div className="single__card__info">
        <h1>{data?.title}</h1>
        <h3>{data?.category}</h3>
        <p>{data?.description}</p>
        <p className="single__card__info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
        <p className="single__card__info__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
          blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At
          risus viverra adipiscing at in tellus. Sociis natoque penatibus et
          magnis dis parturient montes. Ridiculus mus mauris vitae ultricies
          leo. Neque egestas congue quisque egestas diam. Risus in hendrerit
          gravida rutrum quisque non.
        </p>
      </div>
    </div>
  );
  return (
    <div className="container">
      {loading ? (
        <div className="single__loading__card">
          <div className="singleLoading__img bg__animation"></div>
          <div className="singleLoading__info">
            <div className="singleLoading__text bg__animation"></div>
            <div className="singleLoading__text bg__animation"></div>
            <div className="singleLoading__text bg__animation"></div>
            <div className="singleLoading__text bg__animation"></div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {singleItem}
    </div>
  );
};

export default Blog;
