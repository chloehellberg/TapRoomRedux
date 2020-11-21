import React from "react";
import { v4 } from "uuid";
import PropTypes from 'prop-types';

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    const newKeg = {
      name: event.target.name.value,
      quantity: 20,
      brand: event.target.brand.value,
      price: event.target.price.value,
      style: event.target.style.value,
      status: "Keg is Full",
      id: v4()
    }
    props.onNewKegCreation(newKeg);
  
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder = 'Name' />
          <input
          type='text'
          name='brand' 
          placeholder = 'Brand'/>
        <input
          name='price'
          placeholder='Price per Pint' />
        <input 
          type='text'
          name="style"
          placeholder = 'Style'/>
        <button type='submit'>Add Keg</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;