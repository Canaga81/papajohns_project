import React from 'react'

const Card = ( {name, image, composition, price} ) => {
  return (
    <div className='w-[100%] max-w-[300px]'>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <h2>{name}</h2>
            <button>Bunu Sec</button>
        </div>
        <div>
            <p>{composition}</p>
            <p>{price} ₼</p>
        </div>
    </div>
  )
}

export default Card