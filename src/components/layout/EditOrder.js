import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrdersContext from '../../context/orders/ordersContext';

const EditOrder = () => {
  const ordersContext = useContext(OrdersContext);
  const { editOrder, clearEditState, currentOrder, setCurrentOrder } = ordersContext;

  const [name, setName] = useState(currentOrder[0].name);
  const [address, setAddress] = useState(currentOrder[0].address);
  const [phone, setPhone] = useState(currentOrder[0].phone);
  const [important, setImportant] = useState(currentOrder[0].important);

  const onSubmit = (e) => {
    if(name === '' || address === '' || phone === ''){
      alert('Please fill the fields.');
    } else {
      const orderItem = {
        name, address, phone, important
      };

      setCurrentOrder(orderItem);

      editOrder();
      console.log(currentOrder);
      setName('');
      setAddress('');
      setPhone('');
      setImportant(false);
      clearEditState();
    }
    e.preventDefault();
  }

  return (
    <div className="mt-5">
      <h3>Edit Order</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <Form.Control id="name" className="mt-3" type="text" placeholder="Order name" 
            onChange={(e) => setName(e.target.value)} value={name} />
          <Form.Control id="address" className="mt-3" type="text" placeholder="Order address" 
            onChange={(e) => setAddress(e.target.value)} value={address} />
          <Form.Control id="phone" className="mt-3" type="text" placeholder="Phone number" 
            onChange={(e) => setPhone(e.target.value)} value={phone} />
          <Form.Check id="important" className="mt-3" type="checkbox" label="Important order" 
            onChange={(e) => setImportant(e.currentTarget.checked)} checked={important} value={important} />
          <Button variant="info" className="mt-3" type="submit" block>Edit Order</Button>
          <Button variant="light" className="mt-3" block onClick={() => clearEditState()}>Back</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default EditOrder
