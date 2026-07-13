
import Loader from './Loader'
import axios from 'axios'
import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'


const SingleProduct = () => {
  const { id } = useParams()
  // console.log(id)
  const API = `https://fakestoreapi.com/products/${id}`
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API)
      setProduct(response.data)
      setLoading(false)
    }
    catch (error) {
      console.error(error);
    }
  }
  console.log(product)
  useEffect(() => {
    fetchData();
  }, [])
  if (loading) return <Loader />
  return (
    <>
      <div className='tw:bg-gray-300 tw:rounded-lg tw:m-2 tw:group tw:relative'>
        <img src={product.image} className=' tw:w-87.5 tw:h-50 tw:aspect-square tw:object-contain tw:p-4 tw:group-hover:scale-90 tw:transition-all tw:duration-400 tw:m-auto' alt="product_img" />
        <div className='tw:text-xl tw:font-medium tw:p-2 tw:absolute tw:top-0 tw:right-2'>{product.category}</div>
        <div className='tw:p-5 '>
          {/* <div className="tw:p-2">
            <span className='tw:text-xsm tw:bg-green-500 tw:w-fit tw:rounded-lg'>
              {product.rating['rate']}❤️
            </span>
            |
            <span>{product.rating['count']}</span>
          </div> */}
          <h5 className='tw:line-clamp-2 tw:group-hover:text-blue-400'> {product.title}</h5>
          <p className='tw:group-hover:text-gray-500'>{product.description}</p>
          <p className='tw:text-xl tw:font-medium'>{product.price}Rs</p>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
