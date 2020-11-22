import React from "react";
import PropTypes from "prop-types";
import Pint from '../pint.png';

function Keg(props){
  return(
    <React.Fragment>
      <div class="border">
        <div class="boxTop">
          <h2>{props.name}</h2>
          <img src={Pint} alt="pint of beer" />
          <p>Pint Count: {props.quantity}</p>
          <p>Status: {props.status}</p>
          <div onClick = {() => props.whenKegClicked(props.id)}>
            <button class="btn btn-info">Show Details</button>
          </div>
          <button class="btn btn-info" onClick={() => props.whenSellClicked(props.id)}>Sell Pint</button><br></br>
          <button class="btn btn-info" onClick={() => props.whenStockClicked(props.id)}>Restock Full Keg</button>
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