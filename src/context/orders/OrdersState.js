import React, { useReducer } from 'react';
import OrdersContext from './ordersContext';
import OrdersReducer from './ordersReducer';
import { 
  ADD_ORDER, FILTER_ORDERS, CLEAR_ORDERS, EDIT_STATE, CLEAR_EDIT_STATE, SET_CURRENT_ORDER, DELETE_ORDER
} from '../types';

const OrdersState = props => {
  const initialState = {
    orders: [],
    currentOrder: {},
    filter: '',
    editState: false
  }

  const [state, dispatch] = useReducer(OrdersReducer, initialState);

  // Add order
  const addOrder = order => {
    dispatch({
      type: ADD_ORDER,
      payload: order
    })
  }

  // Filter orders
  const filterOrders = filter => {
    dispatch({
      type: FILTER_ORDERS,
      payload: filter
    })
  }

  // Clear orders
  const clearOrders = () => {
    dispatch({
      type: CLEAR_ORDERS
    })
  }

  // Set edit state
  const setEditState = id => {
    dispatch({
      type: EDIT_STATE,
      payload: state.orders.filter((order) => order.id === id)
    })
  }

  // Clear edit state
  const clearEditState = () => {
    dispatch({
      type: CLEAR_EDIT_STATE
    })
  }

  // Edit order
  const editOrder = () => {
    console.log('late');
  }

  // Set current order
  const setCurrentOrder = (currentOrder) => {
    dispatch({
      type: SET_CURRENT_ORDER,
      payload: currentOrder
    })
  }

  // Delete order
  const deleteOrder = id => {
    dispatch({
      type: DELETE_ORDER,
      payload: state.orders.filter((order) => order.id !== id)
    })
  }

  return <OrdersContext.Provider
    value={{
      orders: state.orders,
      currentOrder: state.currentOrder,
      filter: state.filter,
      editState: state.editState,
      addOrder,
      deleteOrder,
      filterOrders,
      clearOrders,
      setEditState,
      clearEditState,
      setCurrentOrder,
      editOrder
    }}
  >
    {props.children}
  </OrdersContext.Provider>
}

export default OrdersState;