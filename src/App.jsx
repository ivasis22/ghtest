import React from 'react';
import { CalculationForm } from './components/CalculationForm';
import { ResultsTable } from './components/ResultsTable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ghtest/" element={<CalculationForm />} />
        <Route path="/results-table" element={<ResultsTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
