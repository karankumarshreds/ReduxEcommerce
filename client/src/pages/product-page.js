import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/product";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Spinner,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";

import Error from "../components/Error";

const ProductPage = ({ match, history }) => {
  let productId = match.params.productId;
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productDetailsAction(productId));
  }, [dispatch, productId]);
  const { loading, product, error } = useSelector(
    (state) => state.productDetail
  );
  if (loading) {
    return <Spinner animation="grow" />;
  }
  if (error) {
    return <Error message={error} />;
  }
  const addToCartHandler = () => {
    console.log(selectedQuantity);
    if (selectedQuantity < 1) {
      return;
    }
    history.push(`/cart/${productId}?qty=${selectedQuantity}`);
  };
  return (
    <div className="container mt-5">
      <Link className="btn btn-light my-3" to="/">
        GO BACK
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fluid />
        </Col>
        <Col md={4}>
          {/* flush gets rid of border of the contianer */}
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 style={{ textTransform: "uppercase" }}>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product?.rating} />
            </ListGroup.Item>
            <ListGroup.Item>
              <Row className="align-items-center">
                <Col>
                  {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                </Col>
                <Col>
                  <Button
                    className="btn btn-dark"
                    disabled={product.countInStock <= 0}
                    onClick={() => addToCartHandler()}>
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            {product.countInStock > 0 && (
              <ListGroup.Item>
                <Row>
                  <Col>Qty</Col>
                  <Col>
                    <Form.Control
                      as="select"
                      value={selectedQuantity}
                      onChange={(e) => setSelectedQuantity(e.target.value)}>
                      {[...Array(product.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
              </ListGroup.Item>
            )}
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
