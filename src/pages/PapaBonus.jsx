import papaBonus_Logo from "../images/papa_bonus_logo_img.png";
import papaBonus_Main_Img from '../images/papaBonus_pizza_bg_main_img.jpg';
import {motion} from 'framer-motion';

const PapaBonus = () => {

  return (

    <motion.div 
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 1.5
    }}
    className="w-full h-full md:pt-16 pt-96 md:pb-16 pb-12 md:px-1 px-0">
      <div className="">
        <div className="relative">
          <div>
            <img className="md:block hidden" src={papaBonus_Main_Img} alt="" />
          </div>
          <div className="flex flex-col items-center gap-y-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <motion.div
            initial={{
              marginLeft: -500
            }}
            animate={{
              marginLeft: 0,
            }}
            transition={{
              duration: 2
            }}
            >
              <img
                className="max-w-[300px] w-full"
                src={papaBonus_Logo}
                alt=""
              />
            </motion.div>

            <motion.div
            initial={{
              marginRight: -500
            }}
            animate={{
              marginRight: 0,
            }}
            transition={{
              duration: 2.5
            }}
            >
              <p className="max-w-[600px] w-full sm:text-[24px] rd:text-[20px] text-[16px] font-bold md:text-white text-black text-center">
                Sizin üçün möhtəşəm bonus proqramımız var. Bu proqram sayəsində
                Siz saytımızdan əldə etdiyiniz məhsullara görə ballar alacaq və
                bu ballarla bizdən hədiyyə ala biləcəksiniz.
              </p>
            </motion.div>

            <motion.div
            initial={{
              marginLeft: -500
            }}
            animate={{
              marginLeft: 0,
            }}
            transition={{
              duration: 3
            }}
            >
              <button className="bg-btnBgColor py-2 px-6 text-[18px] mb-16 text-white font-bold rounded-[10px]">
                Daxil Olmaq
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>

  );

};

export default PapaBonus;