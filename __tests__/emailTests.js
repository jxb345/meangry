import React from 'react';
import { shallow } from 'enzyme';
import App from '../public/components/App.jsx';

describe("App", () => {
  it("renders", () => {
    shallow(<App />)
  });
});
