// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import React from 'react';
import HomePage from "../components/home/HomePage";
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";

// Test homepage:
test('renders hello world', () => {
    const { getByText } = render(<Router><HomePage /></Router>);
    const element = getByText(/Hello World/);
    expect(element).toBeInTheDocument();
    }
);