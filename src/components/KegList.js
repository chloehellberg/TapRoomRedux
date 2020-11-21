import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types"

function KegList(props){
  return(
    <React.Fragment>
      {props.kegList.map((keg) =>
        <Keg name = {keg.name}
        whenKegClicked = {props.onKegSelection}
        quantity = {keg.quantity}
        brand = {keg.brand}
        price = {keg.price}
        style = {keg.style}
        id = {keg.id}
        key = {keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;