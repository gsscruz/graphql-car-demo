import React from 'react';

const AddCar = () => {
  return (
    <form style={{ marginTop: 20 }}>
      <label htmlFor='model'>Model: </label>
      <input id='model' type='text' />
      <label htmlFor='year'>Year: </label>
      <input id='year' type='text' />
      <br />
      <label htmlFor='make'>Make: </label>
      <input id='make' type='text' />
      <label htmlFor='price'>Price: </label>
      <input id='price' type='text' />
      <br />
      <br />
      <button type='submit'>Linux Torvalds</button>
    </form>
  );
};

export default AddCar;
