import React from "react";
import "./Card.css";
import PropTypes from 'prop-types';

function Card({cards}) {
  return (
    <div className="container price-container">
      <h1 className="text-center p-3 fw-bold ">React Price Card Task</h1>
      <br />
      <h5 className="">
        Reproduce this user interface using a React.js application with JSX.
        Write the code <br />
        in a dynamic manner.
      </h5>
      <div className="group-cards row">
        {cards.map((card, index) => (
          <div key={index} className="card col-md-3">
            <span className="text-center text-secondary">{card.type}</span>
            <h2>${card.price}/month</h2>
            <div className="content ">
              <ul>
                {card.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className={feature.enabled ? "enabled" : "disabled"}
                  >
                    <span
                      className={
                        feature.enabled ? "enabled-emoji" : "disabled-emoji"
                      }
                    >
                      {feature.enabled ? "\u2713" : "\u2718"}
                    </span>
                    &nbsp; {feature.text}
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary" type="submit">
                Button
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
Card.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          enabled: PropTypes.bool.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default Card;
