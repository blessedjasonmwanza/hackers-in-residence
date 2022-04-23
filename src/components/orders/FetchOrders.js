const FetchOrders = () => {
  const data = fetch(`http://hir.afrilending.com?key=hir&task=get_all_orders`)
  .then(response => response.json())
  .then(data => (data))
  .catch(error => {
    return {
      error: true,
      console: error,
      msg: 'Could not fetch orders',
    }
  });
  return data;
};

export default FetchOrders;