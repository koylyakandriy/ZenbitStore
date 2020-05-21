import React from "react";
import {
  FaChevronCircleDown,
  FaChevronCircleUp,
  FaTrash,
} from "react-icons/fa";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import {
  DECREMENT_ITEM_ACTION,
  INCREMENT_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
} from "../../store/actions/cartActions";

const CartItems = ({ cartList }) => {
  const dispatch = useDispatch();

  const incrementItem = (id) => {
    dispatch(INCREMENT_ITEM_ACTION(id));
  };

  const decrementItem = (id) => {
    dispatch(DECREMENT_ITEM_ACTION(id));
  };
  const removeItem = (id) => {
    dispatch(REMOVE_ITEM_ACTION(id));
  };

  return (
    <tbody>
      {cartList.map(({ id, title, price, img, count, total }) => (
        <tr key={id}>
          <ImageContainer>
            <img src={img} alt="item images" />
          </ImageContainer>
          <td className="p-0 align-middle text-center">{title}</td>
          <td className="p-0 align-middle text-center">${price}</td>
          <td className="p-0 align-middle text-center">
            <FaChevronCircleDown
              className="cart-icon text-primary"
              onClick={() => decrementItem(id)}
            />
            <span className="text-title text-muted mx-3">{count}</span>
            <FaChevronCircleUp
              className="cart-icon text-primary"
              onClick={() => incrementItem(id)}
            />
          </td>
          <td className="p-0 align-middle text-center">
            <FaTrash
              className="text-danger cart-icon"
              onClick={() => removeItem(id)}
            />
          </td>
          <td className="p-0 align-middle text-center">${total}</td>
        </tr>
      ))}
    </tbody>
  );
};

const ImageContainer = styled.td`
  width: 50px;
  height: 50px;
  text-align: center;
  img {
    height: 100%;
  }
`;

export default CartItems;
