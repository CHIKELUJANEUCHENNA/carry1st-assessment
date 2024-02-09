import React from 'react'
import { render, waitFor } from '@testing-library/react'
import axios from 'axios'
import Home from '@/pages'

jest.mock('axios')

const mockedAxios = axios as jest.Mocked<typeof axios>
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL


describe('Home component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('fetches products and renders them correctly', async () => {
    const mockProducts = [
      {
        id: '1',
        name: 'Product 1',
        price: 10.99,
        imageLocation: '/image1.jpg',
      },
      {
        id: '2',
        name: 'Product 2',
        price: 15.99,
        imageLocation: '/image2.jpg',
      },
    ]

    mockedAxios.get.mockResolvedValueOnce({ data: mockProducts })

    const { getByText, getByAltText } = render(<Home />)

    await waitFor(() => {
      expect(getByText('Products')).toBeInTheDocument()
      expect(getByAltText('Product 1')).toBeInTheDocument()
      expect(getByText('$10.99')).toBeInTheDocument()
      expect(getByAltText('Product 2')).toBeInTheDocument()
      expect(getByText('$15.99')).toBeInTheDocument()
    })

    expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${baseUrl}/productBundles`
    )
  })

  it('renders loading component while fetching data', async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: [] })

    const { container } = render(<Home />)

    expect(container.querySelector('.animate-spin')).toBeInTheDocument()

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledTimes(1)
    })
  })
})
