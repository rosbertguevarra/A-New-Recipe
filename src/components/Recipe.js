import React from "react";
import Modal from "./Modal";
import "../style/home.css";

const Recipe = props => {
  console.log(props);
  return (
    <div className="recipe-list">
      <ul className="list-unstyled">
        <li className="media">
          <img src={props.recipe.image} className="mr-3" alt="meal" />
          <div className="media-body">
            <h5 className="mt-0 mb-1">{props.recipe.label}</h5>
            <span>Source: </span>
            <span className="badge badge-primary">{props.recipe.source} </span>
            <br />
            <span>Health Labels: </span>
            {props.recipe.healthLabels.map((labels, index) => {
              return (
                <span key={index} className="badge badge-warning">
                  {labels}
                </span>
              );
            })}
            <br />
            <span>Cautions: </span>
            {props.recipe.cautions.map((caution, index) => {
              return (
                <span key={index} className="badge badge-danger">
                  {caution}
                </span>
              );
            })}
            <Modal {...props} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Recipe;
