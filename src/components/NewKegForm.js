import React from "react";
import { v4 } from "uuid";
import PropTypes from 'prop-types';

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, quantity: event.target.quantity.value, brand: event.target.brand.value, price: event.target.price.value, style: event.target.style.value, id: v4()});
  
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder = 'name' />
        <input
          type='text'
          name='quantity'
          placeholder = "quantity" />
          <input
          type='text'
          name='brand' 
          placeholder = 'brand'/>
        <input
          name='price'
          placeholder='price' />
        <input 
          type='text'
          name="style"
          placeholder = 'style'/>
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;