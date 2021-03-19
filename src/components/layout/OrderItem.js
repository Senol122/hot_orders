import React, { useContext } from 'react';
import { Card, Badge, ListGroup, Button } from 'react-bootstrap';
import OrdersContext from '../../context/orders/ordersContext';

const OrderItem = ({ order }) => {
  const ordersContext = useContext(OrdersContext);
  const { deleteOrder } = ordersContext;

  const { id, name, address, phone, important} = order;

  return (
    <div className="mt-5">
      <Card>
        <Card.Body>
          <h5>{name}</h5>
          {important && <Badge variant="warning">Important</Badge>}
          <ListGroup variant="flush">
            <ListGroup.Item>
            <i className="fas fa-map-pin"></i>{' ' + address}
            </ListGroup.Item>
            <ListGroup.Item>
              <i className="fas fa-phone"></i>{' ' + phone}
            </ListGroup.Item>
          </ListGroup>
          <div className="mt-2">
            {/* <Button variant="info" onClick={() => setEditState(id)}>Edit</Button>{' '} */}
            <Button variant="danger" onClick={() => deleteOrder(id)}>Delete Order</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default OrderItem
