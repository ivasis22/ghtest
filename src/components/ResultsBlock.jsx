import React from 'react';
import { Alert } from 'react-bootstrap';

export const ResultsBlock = ({ results }) => (
  <Alert variant="success" className="mt-4">
    <Alert.Heading>Результаты расчёта</Alert.Heading>
    <ul className="mb-0">
      {Object.entries(results).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  </Alert>
);