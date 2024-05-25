import { motion } from 'framer-motion';

const Card = ( {name, image, composition, price} ) => {

  return (
    
    <motion.div 
    initial={{
      opacity: 0,
      right: 0,
      marginTop: -50,
      marginLeft: -30,
    }}
    animate={{
      opacity: 1,
      right: 200,
      marginTop: 0,
      marginLeft: 0,
    }}
    whileHover={{
      y: -30,
      transition: {
        duration: 0.5
      },
    }}
    transition={{
      duration: 1,
    }}
    
    className='w-[100%] max-w-[340px] flex flex-col gap-3 cursor-pointer'>

        <div className='max-w-[340px]'>
            <img className='w-full h-[250px]' src={image} alt="image_product" />
        </div>

        <div className="flex items-start justify-between gap-6">
            <h2 className='text-xl font-bold'>{name}</h2>
            
            <motion.button 
            animate={{
              opacity: [0.52, 0.7, 1, 0.7, 0.52],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
            className='w-36 py-2 rounded-lg font-bold text-[15px] text-white bg-aquaBg transition-all hover:opacity-80'>Bunu Sec</motion.button>
        </div>

        <div className='flex flex-col gap-2'>
            <p className='font-bold text-xl'>{composition}</p>
            <p className='text-2xl font-bold'>{price} ₼</p>
        </div>

    </motion.div>

  );

}

export default Card;