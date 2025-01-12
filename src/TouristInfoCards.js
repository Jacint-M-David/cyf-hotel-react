import React from "react";
import DESTINATIONS from "./data/destiantions";

const TouristInfoCards = () => {
  return (
    <div className="TouristInfoCards">
      {DESTINATIONS.map((city, id) => {
        return (
          <div className="card" key={id}>
            <img
              height="150rem"
              src={city.src}
              className="card-img-top"
              alt={city.name}
            />
            <div className="card-body">
              <h2>{city.name}</h2>
              <p>{city.description}</p>
              <a href={city.url} className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;
