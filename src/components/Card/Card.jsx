import React from 'react'

const Card = ( {name, image, composition, price} ) => {

  return (
    
    <div className='w-[100%] max-w-[340px] flex flex-col gap-3'>

        <div className='max-w-[340px]'>
            <img className='w-full h-[250px]' src={image} alt="image_product" />
        </div>
        <div className="flex items-start justify-between gap-6">
            <h2 className='text-xl font-bold'>{name}</h2>
            <button className='w-36 py-2 rounded-lg font-bold text-[15px] text-white bg-aquaBg transition-all hover:opacity-80'>Bunu Sec</button>
        </div>
        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>{composition}</p>
            <p className='text-2xl font-bold'>{price} ₼</p>
        </div>

    </div>

  );

}

export default Card;