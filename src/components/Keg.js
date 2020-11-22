import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return(
    <React.Fragment>
      <div class="border">
        <div class="boxTop">
      <h2>{props.name}</h2>
      <p>Quantity: {props.quantity}</p>
      <p>Status: {props.status}</p>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <button id = "detailButton">Show Details</button>
      </div>
      <button onClick={() => props.whenSellClicked(props.id)}>Sell Pint</button><br></br>
       <button onClick={() => props.whenStockClicked(props.id)}>Restock</button>
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
  whenKegClicked: PropTypes.func,
  whenSellClicked: PropTypes.func,
  whenStockClicked: PropTypes.func
};

export default Keg;