import axios from 'axios';
const BASE_URL = 'http://localhost:3001/orderlist';

const getAllOrderItems = () =>
axios.get (BASE_URL).then(response => {
  console.log(response);
  return response.data;
  });    
 

const getOrderItemById = id =>
axios.get (`${BASE_URL}/${id}`).then(response => {
  console.log(response);
  return response.data;
  });
 
const deleteOrderItem = id => 
   axios.delete (`${BASE_URL}/${id}`).then(response => response.status === 200)
   

const addOrderItem = item =>
  axios.post(BASE_URL, item).then(response => {
    console.log(response);
    return response.data;
    });
   

export { getAllOrderItems, getOrderItemById, deleteOrderItem, addOrderItem };

