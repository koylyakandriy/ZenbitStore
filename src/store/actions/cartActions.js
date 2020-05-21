import {
  GET_ITEMS,
  ADD_ITEM,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
} from "./Types";
import { itemsList } from "../../data";

export const GET_ITEMS_ACTION = () => (dispatch) => {
  dispatch({
    type: GET_ITEMS,
    payload: itemsList,
  });
};

export const ADD_ITEM_ACTION = (item) => (dispatch) => {
  dispatch({
    type: ADD_ITEM,
    payload: item,
  });
};

export const INCREMENT_ITEM_ACTION = (id) => (dispatch) => {
  dispatch({
    type: INCREMENT_ITEM,
    payload: id,
  });
};

export const DECREMENT_ITEM_ACTION = (id) => (dispatch) => {
  dispatch({
    type: DECREMENT_ITEM,
    payload: id,
  });
};

export const REMOVE_ITEM_ACTION = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_ITEM,
    payload: id,
  });
};
