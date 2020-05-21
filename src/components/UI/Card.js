import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import styled from "styled-components";

import { ADD_ITEM_ACTION } from "../../store/actions/cartActions";
import { useDispatch } from "react-redux";

const Item = ({ item }) => {
  const dispatch = useDispatch();
  const { title, description, price, img } = item;

  const addItemToCart = () => {
    dispatch(ADD_ITEM_ACTION(item));
  };

  return (
    <CardWrapper xs={10} sm={6} md={4} lg={3}>
      <Card className="mb-3">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-info text-center">
            ${price}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" onClick={addItemToCart}>
            Add to cart
          </Button>
        </Card.Body>
      </Card>
    </CardWrapper>
  );
};

const CardWrapper = styled(Col)`
  img {
    height: 240px;
    object-fit: contain;
  }
`;

export default Item;
