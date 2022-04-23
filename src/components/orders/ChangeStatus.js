const ChangeStatus = (id, status) => {
    
    fetch(`http://hir.afrilending.com?task=update_order_status&key=hir&order_id=${id}&status=${status}`)
    .then(response => response.json())
    .then(data => {
        console.log('status update', data);
    })
    .catch(error => {
        console.log('status could not be updated');
        console.error(error);
    });
  };
  
  export default ChangeStatus;