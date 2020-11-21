import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <button id = "detailButton">Show Details</button>
      </div>
      <div class="container">
        <div class="row">
          <div class="card">
            <h2>{props.name}</h2>
            <h3>Quantity: {props.quantity}</h3>
            <p>Brand: {props.brand}</p>
            <p>Price: {props.price}</p>
            <p>Style: {props.style}</p>
          </div>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  style: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;