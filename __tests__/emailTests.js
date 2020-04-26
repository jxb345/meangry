import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../public/components/App.jsx';

describe("App", () => {
  it("renders", () => {
    shallow(<App />)
  });
});
