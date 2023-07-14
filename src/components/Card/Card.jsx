import React from "react";
import circle from "../../assets/cricle.png";
import heart from "../../assets/heart.png";
import "./Card.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <img src={props?.img} alt="tvSet" className="card__img" />
        <a href="#">
          <img src={heart} alt="heart" className="card__heart" />
        </a>

        <h2 className="card__title">{props?.title}</h2>
        <p className="card__subTitle">
          Toshkent, Mirzo ulu’bek tumani Bugun 13:11
        </p>
        <a href="#" className="card__link">
          {props?.link}
        </a>
        <img src={circle} alt="cricle" className="card__cricle" />
      </div>
    </>
  );
};

export default Card;