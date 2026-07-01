//import React from 'react'
import data from './data.json'

const Card = () => {
  return (
    <>
      {
        data.map((item, index) => {
          // console.log(item)
          return (
            <div key={index} className=' max-w-screen h-[380px] border border-black-600 m-8 rounded-lg flex justify-between items-center'>
              <div className='mx-10'>
                <img className=' max-h-80 ' src={item.image} alt="Phone" />
              </div>
              <div className='flex justify-start h-full  p-1 mr-5 flex-col '>
                <p className='m-2'>{item.title}</p>
                {/* <li>{item.details[index]}</li> */}
                {item['details'].map((detail, i) => {
                  // console.log(detail)
                  return (
                    <li className='mx-6 my-2 ' key={i}>{detail}</li>
                  )
                })}
                <li className='mx-6 my-2 text-green-700'>
                  <p>
                    {item['offers'].exchangeOffer}p
                  </p>
                  <p>{item['offers'].bankOffer}</p>
                </li>
              </div>
              <div className='mr-4'>
                <h3>
                  {item.price}
                </h3>
                <h4 className='line-through'>
                  {item.originalPrice}
                </h4>
                <h4 className='text-green-400'>
                  {item.discount}
                </h4>

              </div>
            </div>
          )
        })
      }

    </>
  )
}

export default Card
