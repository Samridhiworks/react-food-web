import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/App.css';
import { food_list } from '../assets/assets';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <h2>Your Cart</h2>
        <table border={1}>
          <thead>
            <tr>
              <th>Items</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* {food_list.map((item) => (
              <tr key={item._id}>
                <td><img src={item.image} alt={item.name} style={{ width: '50px' }} /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>1</td>
                <td>${item.price * 1}</td>
                <td>
                  <button>Remove</button>
                </td>
                <td>
                  <button onClick={() => alert('Action for ' + item.name)}>Action</button>
                </td>
              </tr>
            ))} */}
          </tbody>
        </table>
        <button onClick={() => navigate('/place-order')}>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
