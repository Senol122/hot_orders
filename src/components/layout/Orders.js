import React, { useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrderItem from './OrderItem';
import OrdersContext from '../../context/orders/ordersContext';

const Orders = () => {
  const ordersContext = useContext(OrdersContext);
  const { orders, filter, filterOrders, clearOrders } = ordersContext;

  return (
    <div className="mt-5">
      <Form.Control className="mt-3" type="text" placeholder="Filter Orders..." value={filter} onChange={(e) => filterOrders(e.target.value)} />
      {orders.length > 0 && <Button variant="light" className="mt-3" block onClick={clearOrders}>Clear Orders</Button>}
      {orders.length > 0 ? orders.map((order) => 
        order.name.toLowerCase().includes(filter.toLowerCase()) && (
          <OrderItem key={order.id} order={order} />
      ))
        : <div className="mt-3">Please add an order</div>}
    </div>
  )
}

export default Orders
