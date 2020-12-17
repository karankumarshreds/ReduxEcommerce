import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import { listProducts } from "../actions/product";

import Product from "../components/Product";

const HomePage = () => {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    // used to dispatch action
    dispatch(listProducts());
  }, [dispatch]);
  // used to get the state
  const { loading, products, error } = useSelector(
    (state) => state.productList
  );
  console.log(products);
  if (loading) {
    return <Spinner animation="grow" />;
  }
  if (error) {
    if (show) {
      return (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{error}</p>
        </Alert>
      );
    }
  }
  return (
    <div className="container">
      <h1 className="my-4 py-4">Products</h1>
      <Row>
        {products?.products?.length > 0 &&
          products.products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product
                name={product.name}
                image={product.image}
                description={product.description}
                rating={product.rating}
                numReviews={product.numReviews}
                price={product.price}
                id={product._id}
              />
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default HomePage;
