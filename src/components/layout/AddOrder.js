import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import OrdersContext from '../../context/orders/ordersContext';

const AddOrder = () => {
  const ordersContext = useContext(OrdersContext);
  const { addOrder } = ordersContext;

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [important, setImportant] = useState(false);

  const onSubmit = (e) => {
    if(name === '' || address === '' || phone === ''){
      alert('Please fill the fields.');
    } else {
      const id = Math.floor(Math.random() * 10000) + 1;
      const orderItem = {
        id, name, address, phone, important
      };

      addOrder(orderItem);
      setName('');
      setAddress('');
      setPhone('');
      setImportant(false);
    }
    e.preventDefault();
  }

  return (
    <div className="mt-5">
      <h3>Add Order</h3>
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
          <Button className="mt-3" type="submit" block>Add Order</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default AddOrder
