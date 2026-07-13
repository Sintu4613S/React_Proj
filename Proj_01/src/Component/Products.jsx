import axios from 'axios'
import { useEffect, useState } from 'react'
import Loader from './Loader'
import { useNavigate } from 'react-router-dom'
const API = 'https://fakestoreapi.com/products'
const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await axios.get(API)
      setProducts(response.data)
      setLoading(false)
    }
    catch (error) {
      console.error(error);
    }
  }
  console.log(products)
  useEffect(() => {
    fetchData();
  }, [])
  if (loading) return <Loader />
  return (
    <>
      <div className='tw:grid tw:grid-cols-5 tw:gap-2 tw:max-[1200px]:grid-cols-4  tw:p-4 tw:max-[900px]:grid-cols-3 tw:max-[600px]:grid-cols-2 tw:max-[450px]:grid-cols-1'>
        {products.map((items) => {
          // console.log(items)
          return (
            <ProductCard key={items.id} items={items} />
          )
        })}
      </div>
    </>
  )
}

const ProductCard = ({ items }) => {
  const navigate = useNavigate()
  return (
    <>
      <div onClick={() => navigate(`/products/${items.id}`)} className='tw:bg-gray-300 tw:rounded-lg tw:group'>
        <img src={items.image} className='tw:aspect-square tw:object-contain tw:p-4 tw:group-hover:scale-90 tw:transition-all tw:duration-400' alt="product_img" />
        <div className='tw:p-5 '>
          <div className="tw:p-2">
            <span className='tw:text-xsm tw:bg-green-500 tw:w-fit tw:rounded-lg'>
              {items.rating['rate']}❤️
            </span>
            |
            <span>{items.rating['count']}</span>
          </div>
          <h5 className='tw:line-clamp-2 tw:group-hover:text-blue-400'> {items.title}</h5>
          <p className='tw:text-xl tw:font-medium'>{items.price}Rs</p>
        </div>
      </div>
    </>
  )
}
export default Products
