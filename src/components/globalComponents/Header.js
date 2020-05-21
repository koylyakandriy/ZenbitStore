import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { getTotals } from '../../utils';

const Header = () => {
  const cart = useSelector((state) => state.products.cartList);

  return (
    <>
      <Navbar bg="light" expand="lg" sticky="top">
        <Navbar.Brand as={NavLink} to="/">
          Zenbit Store
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={NavLink} to="/cart" className="position-relative">
            <FaShoppingCart style={{ fontSize: "26px" }} />
          </Nav.Link>
          {cart.length > 0 && (
            <CartCount>{getTotals(cart).cartItems}</CartCount>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const CartCount = styled.div`
  height: 25px;
  width: 25px;
  background: rgba(115, 191, 174, 0.3);
  position: absolute;
  border-radius: 50%;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default Header;
