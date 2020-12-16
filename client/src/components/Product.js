import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ name, image, price, rating, id }) => {
  return (
    <Card className="p-2 my-3">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text as="div">
          <div>
            <Rating value={rating} />
          </div>
        </Card.Text>
        <Card.Text as="h3">${price}</Card.Text>
        <Link to={`/product/${id}`}>
          <Button variant="primary">Read More</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
