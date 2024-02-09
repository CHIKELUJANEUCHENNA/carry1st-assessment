import ProductPage from '@/pages/[productId]';
import { render, waitFor } from '@testing-library/react';
import axios, { AxiosResponse } from 'axios';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    query: { productId: '1' },
  }),
}));

jest.mock('axios');

describe('ProductPage Component', () => {
  it('renders product details when fetched successfully', async () => {
    const productData = {
      id: 1,
      name: 'Product Name',
      price: 10,
      description: 'Product Description',
      imageLocation: '/product-image.png',
    };
    (axios.get as jest.Mock).mockResolvedValue({ data: productData } as AxiosResponse);

    const { getByText, getByAltText } = render(<ProductPage />);

    await waitFor(() => {
      expect(getByText('Product Name')).toBeInTheDocument();
      expect(getByText('$10')).toBeInTheDocument();
      expect(getByText('Product Description')).toBeInTheDocument();
      expect(getByAltText('Product Name')).toBeInTheDocument();
    });
  });
  
  it('renders error message if product fetch fails', async () => {
    (axios.get as jest.Mock).mockResolvedValue({ data: null } as AxiosResponse);

    const { container } = render(<ProductPage />);


    expect(container.querySelector('.animate-spin')).toBeInTheDocument();

    await waitFor(() => expect(axios.get).toHaveBeenCalled());
  });
});
