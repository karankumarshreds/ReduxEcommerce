import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailsAction } from "../actions/product";
import { Row, Col, Image, ListGroup, Button, Spinner } from "react-bootstrap";
import Rating from "../components/Rating";

import Error from "../components/Error";

const ProductPage = ({ match }) => {
  // const product = products.find((p) => p._id === match.params.productId);
  let productId = match.params.productId;
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
  console.log("RECIEVED DATA", product);
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
                    disabled={product.countInStock <= 0}>
                    Add To Cart
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>Price: {product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};

export default ProductPage;
