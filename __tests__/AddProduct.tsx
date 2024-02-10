import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddProduct from '@/pages/add-product';

// Mock axios module
jest.mock('axios');

describe('AddProduct Component', () => {
  test('displays error message if required fields are empty', async () => {
    // Render the component
    const { getByText } = render(<AddProduct />);

    // Submit the form without filling in any fields
    fireEvent.click(getByText('Add Product'));

    // Wait for the error messages for each required field
    await waitFor(() => {
      expect(getByText('Name is required')).toBeInTheDocument();
      expect(getByText('Description is required')).toBeInTheDocument();
      expect(getByText('Price is required')).toBeInTheDocument();
      expect(getByText('Currency code is required')).toBeInTheDocument();
      expect(getByText('Currency symbol is required')).toBeInTheDocument();
      expect(getByText('Quantity is required')).toBeInTheDocument();
      expect(getByText('Image URL is required')).toBeInTheDocument();
      expect(getByText('Status is required')).toBeInTheDocument();
    });
  });

it("displays error message if price is not positive", async () => {
    const { getByLabelText, getByText } = render(<AddProduct />);

    // Fill in the form fields
    fireEvent.change(getByLabelText("Name:"), { target: { value: "Test Product" } });
    fireEvent.change(getByLabelText("Description:"), { target: { value: "Test Description" } });
    fireEvent.change(getByLabelText("Currency Code:"), { target: { value: "USD" } });
    fireEvent.change(getByLabelText("Currency Symbol:"), { target: { value: "$" } });
    fireEvent.change(getByLabelText("Price:"), { target: { value: -10 } }); // Enter a negative price

    // Submit the form
    fireEvent.submit(getByLabelText("Add Product"));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(getByText("Price must be positive")).toBeInTheDocument();
    });
  });
});
