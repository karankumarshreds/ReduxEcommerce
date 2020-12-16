import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";

const Product = ({ name, image, description }) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
