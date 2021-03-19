import React, { Fragment, useContext } from 'react';
import OrdersContext from '../../context/orders/ordersContext';
import AddOrder from './AddOrder';
import EditOrder from './EditOrder';

const Home = () => {
  const ordersContext = useContext(OrdersContext);
  const { editState } = ordersContext;

  return (
    <Fragment>
      {editState ? <EditOrder />
                 : <AddOrder />}
    </Fragment>
  )
}

export default Home
