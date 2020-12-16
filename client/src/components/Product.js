import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
const Product = ({ name, image, price, rating, numReviews }) => {
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
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
