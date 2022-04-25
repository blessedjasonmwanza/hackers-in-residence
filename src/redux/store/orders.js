/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';
import ChangeStatus from '../../components/orders/ChangeStatus';
// slice
const ordersSlice = createSlice({
  name: 'orders',
  initialState: {
    orders: [],
    userData: JSON.parse(localStorage.getItem('userData')) || {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
    }
  },
  reducers: {
    ordersSuccess: (state, action) => {
      state.orders = action.payload;
    },
    updateOrderStatus: (state, action) => {
      const {id, status} = action.payload;
      const updatedOrders = state.orders.map(order => (order.id === id ? { ...order, status: status } : order));
      state.orders = updatedOrders;
      ChangeStatus(id, status);
    },
    updatePersonalDetails: (state, action) => {
      state.userData = action.payload;
      
    }
  },
});

export default ordersSlice.reducer;

// Actions
export const {
  ordersSuccess, updatePersonalDetails, updateOrderStatus
} = ordersSlice.actions;
