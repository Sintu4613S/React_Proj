import axios from 'axios'
import { useEffect, useState } from 'react'
const API = 'https://fakestoreapi.com/products'
const Products = () => {
  const [products, setProducts] = useState([])
  const fetchData = async () => {
    try {
      const response = await axios.get(API)
      setProducts(response.data)
    }
    catch (error) {
      console.error(error);
    }
  }
  console.log(products)
  useEffect(() => {
    fetchData();
  }, [])
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
  return (
    <>
      <div className='tw:bg-gray-300 tw:rounded-lg'>
        <img src={items.image} className='tw:aspect-square tw:object-contain tw:p-4' alt="product_img" />
        <div className='tw:p-5 '>
          <div className="tw:p-2">
            <span className='tw:text-xsm tw:bg-green-500 tw:w-fit tw:rounded-lg'>
              {items.rating['rate']}❤️
            </span>
            |
            <span>{items.rating['count']}</span>
          </div>
          <h5 className='tw:line-clamp-2'> {items.title}</h5>
          <p className='tw:text-xl tw:font-medium'>{items.price}Rs</p>
        </div>
      </div>
    </>
  )
}
export default Products
