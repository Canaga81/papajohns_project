import { GrBasket } from "react-icons/gr";
import { IoRestaurant } from "react-icons/io5";
import { BsCashCoin } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Head = () => {
    
  return (
    <div className='w-full rd:h-[90px] h-[70px] pt-7 pb-10 bg-white'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-5'>
                    <div>
                        <h2 className='hidden cr:block font-bold md:text-2xl text-xl'>Restoranlar</h2>
                        <IoRestaurant className="block cr:hidden md:text-2xl text-xl" />
                    </div>
                    <div>
                        <h2 className='hidden cr:block font-bold md:text-2xl text-xl'>PapaBonus</h2>
                        <BsCashCoin className="block cr:hidden md:text-2xl text-xl" />
                    </div>
                </div>
                <div className='flex items-center gap-5'>
                    <select className='border-none outline-none px-2 font-bold md:text-2xl text-xl'>
                        <option className='font-bold' value="Az">Azərbaycan</option>
                        <option className='font-bold' value="En">English</option>
                        <option className='font-bold' value="Ru">Rus</option>
                    </select>

                    <div>
                        <h2 className='hidden cr:block font-bold md:text-2xl text-xl'>Giriş/Qeydiyyat</h2>
                        <FaUser className="block cr:hidden md:text-2xl text-xl" />
                    </div>
                    <div className='relative flex flex-col gap-1 items-center'>
                        <span className='font-bold absolute -top-5 right-1 text-white text-[12px] bg-red-500 w-5 h-5 flex items-center justify-center rounded-full'>0</span>
                        <GrBasket className='md:text-3xl text-xl' />
                        <p className='md:text-[16px] text-[14px] font-bold'>0₼</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );

}

export default Head;