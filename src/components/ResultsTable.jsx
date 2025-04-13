import React from 'react';
import { useLocation } from 'react-router-dom';

export const ResultsTable = () => {
  const location = useLocation();
  const results = location.state?.results || {};

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Результаты расчёта градирни</h2>
      
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th className="w-50">Параметр</th>
              <th className="w-50">Значение</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(results).map(([key, value]) => (
              <tr key={key}>
                <td><strong>{key}</strong></td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};