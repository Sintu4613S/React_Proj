import React from 'react'
import { useSelector } from 'react-redux'

const Product = () => {
  const products = useSelector((state) => state?.productReducer?.products ?? [])

  return (
    <div className='text-white'>
      {products.length > 0 ? (
        products.map((item, index) => (
          <div key={index}>{JSON.stringify(item)}</div>
        ))
      ) : (
        <div>No products added yet</div>
      )}
    </div>
  )
}

export default Product
