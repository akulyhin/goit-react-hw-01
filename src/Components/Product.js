import React from 'react';

export default function Product(props) {
    return (
      <div>
        <img src={props.image} alt="Tacos With Lime" width="640" />
        <h2>{props.name}</h2>
        <p>Price: {props.price}$</p>
        <button type="button">Add to cart</button>
      </div>
    );
  }