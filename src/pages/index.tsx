import axios from 'axios'
import { useState, useEffect } from 'react'
import router from 'next/router'
import Image from 'next/image'
import { Product } from '../utils/customTypes'
import Loading from '@/components/Reusabel/Loading'

function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
    const fetchData = async () => {
      try {
        const response = await axios.get(`${baseUrl}/productBundles`)
        setProducts(response.data)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg bg-yellow-100 cursor-pointer"
            onClick={() => router.push(`/${product.id}`)}
          >
            <Image
              src={product.imageLocation}
              alt={product.name}
              width={200}
              height={200}
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
