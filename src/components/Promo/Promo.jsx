import React from 'react';
import { motion } from 'framer-motion';

const Promo = () => {
  return (
    <div className='h-[90px] leading-[90px] bg-promoBg mt-[25px] sm:mr-9 mr-3 sm:ml-9 ml-3'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-center gap-9 px-5'>
                <h2 className='hidden cr:text-3xl cr:block font-bold'>Promo kodunuz var? <span className='text-aquaBg'>Endirimdən istifadə edin!</span> </h2>
                <div className='flex h-[90px] items-center gap-3'>
                    <input className='h-[39px] leading-[39px] p-2 bg-white outline-none border border-aquaBg rounded-lg w-full' type="text" placeholder='Promo kodu daxil edin' />
                    <motion.button
                    animate={{
                      borderRadius: [5, 15, 30, 15, 5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                    }}
                    className='h-[39px] text-[18px] font-bold leading-[39px] rounded inline-block px-[21px] bg-aquaBg border-none outline-none cursor-pointer text-white transition-all hover:opacity-80'>OK</motion.button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Promo;