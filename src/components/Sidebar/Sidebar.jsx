import { useContext, useState } from "react";
import { SidebarContext } from "../../contexts/SidebarContext";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const { isOpen, setIsOpen } = useContext(SidebarContext);

  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "fixed inset-0 bg-[rgba(0,0,0,0.17)] z-50" : ""
        }`}
      ></div>
      <div
        className={`${
          isOpen ? "-right-0" : "-right-full"
        } w-full  bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
      >
        <div onClick={() => setIsOpen(false)} className="mt-10 cursor-pointer">
          <HiMiniXMark
            size={36}
            className="transition duration-150 hover:text-red-500"
          />
        </div>

        <div className="pt-6 flex flex-col gap-4 pl-2 relative z-50">
          <Link onClick={() => setIsOpen(false)} to={"/kampaniyalar"}>
            <p
              onClick={() => handleLinkClick("/kampaniyalar")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/kampaniyalar"
                  ? "underline leading-3"
                  : "text-black"
              }`}
            >
              KAMPANİYALAR
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/papadias"}>
            <p
              onClick={() => handleLinkClick("/papadias")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/papadias"
                  ? "underline leading-3"
                  : "text-black"
              }`}
            >
              PAPADİAS
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/pizza"}>
            <p
              onClick={() => handleLinkClick("/pizza")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/pizza" ? "underline leading-3" : "text-black"
              }`}
            >
              PİZZA
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/qelyanalti"}>
            <p
              onClick={() => handleLinkClick("/qelyanalti")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/qelyanalti"
                  ? "underline leading-3"
                  : "text-black"
              }`}
            >
              QƏLYANALTI
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/salat"}>
            <p
              onClick={() => handleLinkClick("/salat")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/salat" ? "underline leading-3" : "text-black"
              }`}
            >
              SALAT
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/pasta"}>
            <p
              onClick={() => handleLinkClick("/pasta")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/pasta" ? "underline leading-3" : "text-black"
              }`}
            >
              PASTA
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/icki"}>
            <p
              onClick={() => handleLinkClick("/icki")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/icki" ? "underline leading-3" : "text-black"
              }`}
            >
              İÇKİ
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/desert"}>
            <p
              onClick={() => handleLinkClick("/desert")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/desert" ? "underline leading-3" : "text-black"
              }`}
            >
              DESERT
            </p>
          </Link>
          <Link onClick={() => setIsOpen(false)} to={"/sous"}>
            <p
              onClick={() => handleLinkClick("/sous")}
              className={`md:text-xl text-[16px] font-bold ${
                activeLink === "/sous" ? "underline leading-3" : "text-black"
              }`}
            >
              SOUS
            </p>
          </Link>
        </div>
      </div>
    </div>

  );

};

export default Sidebar;