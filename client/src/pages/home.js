import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";
// import { productsListAction, productDetailsAction } from "../actions/product";
import { productsListAction } from "../actions/product";

import Product from "../components/Product";
import Error from "../components/Error";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // used to dispatch action
    dispatch(productsListAction());
  }, [dispatch]);
  // used to get the state
  const { loading, products, error } = useSelector(
    (state) => state.productList // as named in store
  );
  if (loading) {
    return <Spinner animation="grow" />;
  }
  if (error) {
    return <Error message={error} />;
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
