import React from 'react';
import { Card } from 'react-bootstrap';

export const Section = ({ title, children }) => (
  <Card className="mb-4">
    <Card.Header as="h5" className="bg-light">
      {title}
    </Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);