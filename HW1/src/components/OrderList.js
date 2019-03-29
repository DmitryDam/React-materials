import React from "react";
import Order from './order-history.json';

const OrderList = () => (
    <table>
      <tbody>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Address</th>
        <th>Rating</th>
      </tr>
      {Order.map(order => (
       <tr key={order.id}>
        <td>
          {order.date}
        </td>
        <td>
          {order.price}
        </td>
        <td>
          {order.address}
        </td>
        <td>
          {order.rating}
        </td>
        </tr>
      ))}
      </tbody>
    </table>
  )

  export default OrderList;