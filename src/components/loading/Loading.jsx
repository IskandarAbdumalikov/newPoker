import React from "react";
import "./loading.scss";

const Loading = () => {
  const loadingCard = (
    <div class="loading">
      <div class="loading__item">
        <div class="loading__img bg__animation"></div>
        <div class="loading__title bg__animation"></div>
        <div class="loading__title bg__animation"></div>
      </div>
    </div>
  );
  return (
    <div className="loading__wrapper">
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
      {loadingCard}
    </div>
  );
};

export default Loading;
