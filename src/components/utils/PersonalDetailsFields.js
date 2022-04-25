import React from 'react'
import {updatePersonalDetails} from '../../redux/store/orders';
import {useDispatch, useSelector} from 'react-redux';

export default function PersonalDetailsFields() {
    const dispatch = useDispatch();
    const userData = useSelector(state => state.orders.userData);
    const updateUserData = (data) => {
        dispatch(updatePersonalDetails(data));
    }
  return (
    <>
        <label>
            First name:
            <input onInput={(e) =>(updateUserData({...userData, first_name: e.target.value}))} value={userData.first_name}  type="text" placeholder="First name"  required/>
        </label>
        <label>
            Last name:
            <input onInput={(e) =>(updateUserData({...userData, last_name: e.target.value}))} value={userData.last_name} type="text" placeholder="Last name"  required/>
        </label>
        <label>
            Phone number:
            <input onInput={(e) =>(updateUserData({...userData, phone: e.target.value}))} value={userData.phone} type="tel" placeholder="Phone number"  required/>
        </label>
        <label>
            House / Prefab No:
            <input onInput={(e) =>(updateUserData({...userData, address: e.target.value}))} value={userData.address} type="text" placeholder="house or Prefab number"  required/>
        </label>
    </>
  )
}
