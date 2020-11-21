import React from "react";
import { v4 } from "uuid";
import PropTypes from 'prop-types';

function NewKegForm(props){
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, quantity: 2, brand: event.target.brand.value, price: event.target.price.value, style: event.target.style.value, id: v4()});
  
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