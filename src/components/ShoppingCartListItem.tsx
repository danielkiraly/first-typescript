import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

interface ShoppingCartListItemProps {
  ingredient: {
    text: string;
    weight: string;
  };
}

export const ShoppingCartListItem: React.FC<ShoppingCartListItemProps> = ({ingredient}) => {
  return (
    <Card
      body
      style={{ width: '18rem' }}
    >
      <li>
        {ingredient.text}
      </li>
      <Button variant="danger">Delete</Button>
    </Card>
  );
};

export default ShoppingCartListItem;
