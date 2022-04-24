import React from 'react'

export default function Groceries() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    // if current time > 11AM return date after tomorrow else return date after today
    const date = new Date();
    const currentHour = date.toLocaleString('en-US', {'hour': 'numeric','hour12': false});
    const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
    const afterTomorrow = new Date(date.getTime() + 2 * 24 * 60 * 60 * 1000);
    const returnDay = currentHour > 11 ? days[afterTomorrow.getDay()] : days[tomorrow.getDay()];

    console.log(); 
  return (
    <section className='groceries'>
        <h1 className='page-title'>Buy Groceries</h1>
        <form className=''>
            <label>
                First name:
                <input type="text" placeholder="First name"  required/>
            </label>
            <label>
                Last name:
                <input type="text" placeholder="Last name"  required/>
            </label>
            <label>
                Phone number:
                <input type="text" placeholder="Phone number"  required/>
            </label>
            <label>
                Prefab No:
                <input type="text" placeholder="Prefab number"  required/>
            </label>
            <label>
                Items to buy:
                <select required>
                    <option value="" defaultValue>Select an item</option>
                    <option value="">Vegetables only (K15) </option>
                    <option value="">Tomatoes only (K15) </option>
                    <option value="">Onions only (K15) </option>
                    <option value="">Vegetables &amp; Tomatoes (30)</option>
                    <option value="">Vegetables &amp; Onions (K30) </option>
                    <option value="">Vegetables, Onions &amp; Tomatoes (90)</option>
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
