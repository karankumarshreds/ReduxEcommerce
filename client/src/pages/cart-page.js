import React, { useEffect } from "react";
import Link from "react-router-dom";
import { useSelect, useDispatch } from "react-redux";
import { addToCartAction } from "../actions/cart";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const CartPage = ({ match, location, history }) => {
  const productId = match?.params?.id || null;
  // whatever comes after ? in the url including the '?'
  // in case url is : http://example.com/productId?qty=1
  // location.search === ?qty=1
  const qty = location.search;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addToCartAction());
  });
  return <div>CART</div>;
};

export default CartPage;
