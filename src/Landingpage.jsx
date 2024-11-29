import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import profile from "./assets/Image/profile.svg";
import gambar from "./assets/Image/gambarutama.svg";
import webinar from "./assets/Image/webinar.svg";
import seminar from "./assets/Image/seminar.svg";
import kuliah from "./assets/Image/kuliah.svg";
import workshop from "./assets/Image/workshop.svg";
import sertifikasi from "./assets/Image/sertifikasi.svg";
import circle5 from "./assets/Image/circle5.svg";
import Cardpage from "./components/Cardpage";
import circle6 from "./assets/Image/circle6.svg";
import arrowLeft from "./assets/Image/icon/arrow-circle-left.svg";
import arrowRight from "./assets/Image/icon/arrow-circle-right.svg";
import logo from "./assets/Image/logo.svg";

function Landingpage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const maxIndex = 4; 

  
  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="font-sans flex flex-col box-border  w-full">
      <header className="bg-[#003266] w-full max-[1000px] ">
        <nav className=" sm:px-[0px] md:p-5 tengah:px-6 bg-white w-full lg:px-10 xl:px-[85px] py-5 ">
          <div className="flex justify-between items-center  px-[0px] w-full ">
            
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="sm:max-w-[150px] md:max-w-[229px] tengah:max-w-[180px]" />
            </div>

            
            

           
            <ul className="hidden lg:flex space-x-8 items-center text-[#003266] text-[20px] font-medium">
              <li>
              <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">MyEvents</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>


            <div className="flex justify-center gap-x-3 items-center">
            <div className=" sm:flex gap-x-[20px] sm:gap-x-[10px] item-center text-nowrap">
              <Link to="/Welcome"><button className="bg-[#027FFF] border rounded-[10px]   text-white  sm:text-[15px] font-medium sm:w-[80px] sm:h-[30px] md:w-[155px] md:h-[46px] md:text-[20px] tengah:w-[120px] tengah:h-[36px] tengah:text-[17px]">
                Login
              </button></Link>
              <Link><button className="border-[#027FFF] border-2 rounded-[10px]  text-[#027FFF]  sm:text-[15px] font-medium sm:w-[80px] sm:h-[30px] md:w-[155px] md:h-[46px] md:text-[20px] tengah:w-[120px] tengah:h-[36px] tengah:text-[17px]">
                Sign Up
              </button></Link>
            </div>
          

          <button
              onClick={toggleMenu}
              type="button"
              className="flex lg:hidden  items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              aria-controls="navbar-hamburger"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            </div>
            </div>

          
          {isMenuOpen && (
            <div className="lg:hidden mt-4">
              <ul className="flex flex-col space-y-4 text-[#003266] text-[20px] font-medium">
                <li>
                  <Link to="/Landingpage">Home</Link>
                </li>
                <li>
                  <a href="#">MyEvents</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
          )}
        </nav>

        
        <main className="flex justify-around text-white items-center my-auto py-10 w-full md:px-5">
          <div className="flex flex-col gap-y-[24px] ">
            <h1 className="font-bold  sm:text-[20px] md:text-[28px] lg:text-[54px] max-w-[640px] w-full tengah:text-[24px] ">
              Wujudkan Potensimu Melalui Pengalaman yang Tak Terbatas!
            </h1>
            <p className="max-w-[550px] font-medium sm:text-[15px] md:text-[23px] tengah:text-[20px] lg:text-[26px] ">
              Kembangkan dirimu sekarang dan raih prestasi luar biasa.
            </p>
            <ScrollLink to="acara" smooth={true} duration={800}><p className="max-w-[278px] px-[16px] py-[8px] bg-[#027FFF] rounded-[10px] sm:max-w-[200px] md:max-w-[278px] lg:max-w-[278px] tengah:max-w-[240px] flex justify-center cursor-pointer">
              Pesan
            </p>
            </ScrollLink>
            <div className="flex gap-x-[20px] sm:gap-x-[15px] sm:max-w-[200px] lg:gap-x-[20px] tengah:max-w-[530px] ">
            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[38px] sm:text-[20px] lg:text-[38px] md:text-[38px]">20+</h1>
              <p className="font-normal text-[18px] sm:text-[12px] lg:text-[18px] md:text-[18px]">Trending Events</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[38px] sm:text-[20px] lg:text-[38px] md:text-[38px]">10+</h1>
              <p className="font-normal text-[18px] sm:text-[12px] lg:text-[18px] md:text-[18px]">Subtopik</p>
            </div>

            <div className="flex flex-col items-center">
              <h1 className="font-bold text-[38px] sm:text-[20px] lg:text-[38px] md:text-[38px]">5+</h1>
              <p className="font-normal text-[18px] sm:text-[12px] lg:text-[18px] md:text-[18px]">Kategori Acara</p>
            </div>
            </div>

          </div>
          <img src={gambar} alt="Gambar utama" className="relative z-10 w-full sm:w-[200px] md:w-[440px] tengah:w-[300px] lg:w-[550px] " />
        </main>
      </header>

      
      <img src={circle5} alt="Circle dekorasi" className="absolute right-0 top-72 sm:hidden xl:block" />

     
      <div className="flex flex-col gap-y-[12px] mb-[12px] ">
        <h1 className="flex justify-center mt-[12px] items-center font-semibold text-[32px]">
          Kategori
        </h1>
        <ul className="flex gap-x-[64px] justify-center ">
          <li>
            <img src={webinar} alt="Webinar" />
          </li>
          <li>
            <img src={seminar} alt="Seminar" />
          </li>
          <li>
            <img src={kuliah} alt="Kuliah" />
          </li>
          <li>
            <img src={workshop} alt="Workshop" />
          </li>
          <li>
            <img src={sertifikasi} alt="Sertifikasi" />
          </li>
        </ul>
      </div>

      
      <div id="acara" className="bg-[#EAF4FF] border-transparent rounded-t-[100px] flex flex-col items-center justify-center">
        <h1 className="font-semibold  text-[#003266] mt-[80px] mb-[80px] flex sm:text-[32px] md:text-[48px] ">
          Jelajahi Acara Unggulan
        </h1>
        <div className="flex flex-wrap justify-center">
          <Cardpage />
          <img src={circle6} alt="Circle dekorasi" className="absolute left-0 top-[1300px]" />
        </div>
        <div className="flex items-center gap-3 gap-x-10 mt-8">
          <img
            src={arrowLeft}
            alt="Panah kiri"
            className="w-[54px] h-[54px] cursor-pointer sm:w-[40px] md:w-[54px]"
            onClick={handlePrev}
          />
          {[0, 1, 2, 3, 4].map((index) => (
            <span
              key={index}
              className={`w-[24px] h-[24px] rounded-full cursor-pointer sm:w-[20px] sm:h-[20px] md:w-[24px] md:h-[24px] ${
                activeIndex === index ? "bg-[#027FFF]" : "bg-gray-300"
              }`}
              onClick={() => setActiveIndex(index)}
            ></span>
          ))}
          <img
            src={arrowRight}
            alt="Panah kanan"
            className="w-[54px] h-[54px] cursor-pointer sm:w-[40px] md:w-[54px]"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
