import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

export default function Groceries() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const date = new Date();
    const currentHour = date.toLocaleString('en-US', {'hour': 'numeric','hour12': false});
    const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const afterTomorrow = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    const returnDay = (currentHour >= 24 || currentHour <= 11) ? days[tomorrow.getDay()] : days[afterTomorrow.getDay()];
    const [groceries, setGroceries] = useState([
        {
            id: 1,
            name: 'Vegetables only',
            price: 1.00,
            currency: 'ZMW',
        },
        {
            id: 2,
            name: 'Tomatoes only',
            price: 2.00,
            currency: 'ZMW',
        },
        {
            id: 3,
            name: 'Onions only',
            price: 3.00,
            currency: 'ZMW',
        },
        {
            id: 4,
            name: 'Vegetables and Tomatoes',
            price: 4.00,
            currency: 'ZMW',
        },
        {
            id: 5,
            name: 'Vegetables and Onions',
            price: 5.00,
            currency: 'ZMW',
        },
        {
            id: 6,
            name: 'Tomatoes and Onions',
            price: 6.00,
            currency: 'ZMW',
        },
        {
            id: 7,
            name: 'Vegetables, Tomatoes and Onions',
            price: 7.00,
            currency: 'ZMW',
        },
        
    ]);
    const savedUserData = JSON.parse(localStorage.getItem('userData')) || {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
    };
    const [selectProduct, setSelectProduct] = useState('');
    const [userData, setUserData] = useState(savedUserData);
    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);
    const placeOrder = (e) => {
        e.preventDefault();
        const order = {
            user: userData,
            item: selectProduct,
            date: returnDay,
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
                    setSelectProduct('');
                    document.querySelector('select').selectedIndex = 0;
                });
            }
        })
    };
  return (
    <section className='groceries animate__animated animate__fadeIn'>
        <h1 className='page-title'>Buy Groceries</h1>
        <form onSubmit={(e) => placeOrder(e)}>
            <label>
                First name:
                <input onInput={(e) =>(setUserData({...userData, first_name: e.target.value}))} value={userData.first_name}  type="text" placeholder="First name"  required/>
            </label>
            <label>
                Last name:
                <input onInput={(e) =>(setUserData({...userData, last_name: e.target.value}))} value={userData.last_name} type="text" placeholder="Last name"  required/>
            </label>
            <label>
                Phone number:
                <input onInput={(e) =>(setUserData({...userData, phone: e.target.value}))} value={userData.phone} type="tel" placeholder="Phone number"  required/>
            </label>
            <label>
                Prefab No:
                <input onInput={(e) =>(setUserData({...userData, address: e.target.value}))} value={userData.address} type="text" placeholder="Prefab number"  required/>
            </label>
            <label>
                Items to buy:
                <select required onChange={(e) => setSelectProduct(e.target.value) }>
                    <option value="" defaultValue>Select an item</option>
                    {
                        groceries.map(item => (
                            <option key={item.id} value={item.id}>{item.name} ({item.currency}{item.price})</option>
                        ))
                    }
                </select>
            </label>
            <label style={{flexFlow:'row wrap',justifyContent:'space-around'}}>
                <span>Delivery date:</span>
                <b>10:00 AM</b> <b>{returnDay}</b>
            </label>
            <center>
                <button type="submit" className='btn'>Place order</button>
            </center>
        </form>
    </section>
  )
}
