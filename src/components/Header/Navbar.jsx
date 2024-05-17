import { FaQuestion } from "react-icons/fa";
import Logo from '../../images/papajons_logo.png';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { SidebarContext } from "../../contexts/SidebarContext";

const Navbar = () => {

  const {setIsOpen} = useContext(SidebarContext)

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  }

  return (

    <div className='w-full rd:h-[100px] h-[80px] py-7 bg-navbarBg'>
      <div className='container mx-auto'>
        <div className='flex items-center justify-between gap-5'>
          <div>
            <Link to={'/'}>
              <img className='rd:h-[90px] rd:w-[150px] h-[100px] w-[130px] rd:pb-9 pb-12' src={Logo} alt="" />
            </Link>
          </div>
          <div className="hidden cr:flex items-start gap-5 text-white rd:pb-9 pb-12">
            <Link to={'/kampaniyalar'}>
              <p onClick={() => handleLinkClick('/kampaniyalar')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/kampaniyalar' ? 'underline leading-3' : 'text-white'}`}>KAMPANİYALAR</p>
            </Link>
            <Link to={'/papadias'}>
              <p onClick={() => handleLinkClick('/papadias')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/papadias' ? 'underline leading-3' : 'text-white'}`}>PAPADİAS</p>
            </Link>
            <Link to={'/pizza'}>
              <p onClick={() => handleLinkClick('/pizza')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/pizza' ? 'underline leading-3' : 'text-white'}`}>PİZZA</p>
            </Link>
            <Link to={'/qelyanalti'}>
              <p onClick={() => handleLinkClick('/qelyanalti')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/qelyanalti' ? 'underline leading-3' : 'text-white'}`}>QƏLYANALTI</p>
            </Link>
            <Link to={'/salat'}>
              <p onClick={() => handleLinkClick('/salat')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/salat' ? 'underline leading-3' : 'text-white'}`}>SALAT</p>
            </Link>
            <Link to={'/pasta'}>
              <p onClick={() => handleLinkClick('/pasta')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/pasta' ? 'underline leading-3' : 'text-white'}`}>PASTA</p>
            </Link>
            <Link to={'/icki'}>
              <p onClick={() => handleLinkClick('/icki')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/icki' ? 'underline leading-3' : 'text-white'}`}>İÇKİ</p>
            </Link>
            <Link to={'/desert'}>
              <p onClick={() => handleLinkClick('/desert')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/desert' ? 'underline leading-3' : 'text-white'}`}>DESERT</p>
            </Link>
            <Link to={'/sous'}>
              <p onClick={() => handleLinkClick('/sous')} className={`md:text-xl text-[16px] font-bold ${activeLink === '/sous' ? 'underline leading-3' : 'text-white'}`}>SOUS</p>
            </Link>
          </div>
          
          <div className="flex items-center justify-between gap-5 rd:pb-9 pb-12">
            <div onClick={() => setIsOpen(true)} className="cr:hidden block">
              <FaBarsStaggered className="text-2xl text-white cursor-pointer" />
            </div>
            <div className="flex items-center justify-between gap-2">
              <p className="text-white md:text-xl text-[16px] font-bold">0 bal</p>
              <FaQuestion className="text-white bg-aquaBg w-[30px] h-[30px] p-2 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Navbar;