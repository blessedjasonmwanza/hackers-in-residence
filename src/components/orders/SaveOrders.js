const saveOrders = (orders) => localStorage.setItem('orders', JSON.stringify(orders));
export default saveOrders;