import {
  ADD_ORDER, FILTER_ORDERS, CLEAR_ORDERS, EDIT_STATE, DELETE_ORDER, CLEAR_EDIT_STATE, SET_CURRENT_ORDER
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload],
        filter: ''
      }
    case DELETE_ORDER:
      return {
        ...state,
        orders: action.payload
      }
    case FILTER_ORDERS:
      return {
        ...state,
        filter: action.payload
      }
    case CLEAR_ORDERS:
      return {
        ...state,
        orders: []
      }
    case EDIT_STATE:
      return {
        ...state,
        currentOrder: action.payload,
        editState: true
      }
    case CLEAR_EDIT_STATE:
      return {
        ...state,
        editState: false,
      }
    case SET_CURRENT_ORDER:
      return {
        ...state,
        currentOrder: action.payload
      }
    
    default:
      return state;
  }
}