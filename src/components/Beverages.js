import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import DeliveryDay from './utils/DeliveryDay';
import PersonalDetailsFields from './utils/PersonalDetailsFields';
import { useSelector } from 'react-redux';

export default function Beverages() {
  const userData = useSelector(state => state.orders.userData);
  const [items, setItems] = useState('');
  const placeOrder = (e) => {
      e.preventDefault();
      const order = {
          user: userData,
          item: items,
          date: DeliveryDay,
      };
      Swal.fire({
          title: 'Confirm order',
          icon: 'question',
          text: 'Are you sure you want to place this order?',
          showCancelButton: true,
          confirmButtonColor: 'var(--theme-color)',
          confirmButtonText: 'Yes, place order!',
          cancelButtonText: 'No, cancel!',
          reverseButtons: true,

      }).then((res) => {
          if (res.isConfirmed) {
              Swal.fire({
                  title: 'Order Placed!',
                  text: 'Your order has been placed successfully!',
                  icon: 'success',
                  confirmButtonColor: 'var(--theme-color)',
              }).then(() => {
                  setItems('');
              });
          }
      })
  };
  
  return (
    <section className='beverages animate__animated animate__fadeIn'>
      <h2 className='page-title'>Order Beverages</h2>
      <form onSubmit={(e) => placeOrder(e)}>
          <PersonalDetailsFields />
            <label>
                Items to buy:
                <textarea className='items' value={items} onInput={(e) => setItems(e.target.value)} required placeholder='Items in full description'></textarea>
            </label>
            <label style={{flexFlow:'row wrap',justifyContent:'space-around'}}>
                <span>Delivery date:</span>
                <b>10:00 AM</b> <b>{DeliveryDay()}</b>
            </label>
            <center>
                <button type="submit" className='btn'>Place order</button>
            </center>
        </form>
    </section>
  )
}
