import axios from 'axios'
import { useEffect, useState } from 'react'
import { Product } from '../utils/customTypes'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Loading from '@/components/Reusabel/Loading'

function ProductPage() {
  const router = useRouter()
  const { productId } = router.query
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${baseUrl}/productBundles/${productId}`
        )
        setProduct(response.data)
      } catch (error) {
        console.error('Error fetching product:', error)
      }
    }
    if (productId) {
      fetchProduct()
    }
  }, [productId])
  if (!product) {
    return <Loading />
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-12 bg-yellow-200 rounded-lg shadow-lg">
        <Image
          src={product.imageLocation}
          alt={product.name}
          className="mb-4"
          width={300}
          height={300}
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 mb-2">${product.price}</p>
        <p className="mb-4">{product.description}</p>
        <div className="flex">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Add to Cart
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded ml-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
