import React from 'react'
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div class="border">
        <div class="boxTop">
          <h1>{keg.name} Details</h1>
          <p>Name: {keg.name}</p>
          <p>Brand: {keg.brand}</p>
          <p>Price per Pint: {keg.price}</p>
          <p>Quantity Left: {keg.quantity}</p>
          <p>Style: {keg.style}</p>
          <button class="btn btn-info" onClick={()=> onClickingDelete(keg.id) }>Delete Keg</button>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default KegDetail;