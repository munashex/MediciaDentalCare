import apointImage from '../images/appointmentImage.avif'
import { useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import appointImage2 from '../images/appointmentImage2.avif' 
import appointImage3 from '../images/appointmentImage3.avif'
import OurDentists from '../components/OurDentists';
import Contact from '../components/Contact';


function Appointment() {

const navigate = useNavigate()   

  return (
    <div className="mt-7">
     {/* Top image with text */}
     <div className="relative">
        <img 
          src={apointImage} 
          alt="mediciaImage" 
          className="rounded-2xl w-full h-64 object-cover md:h-96 lg:h-96"
        />
        <div className="absolute inset-0 flex md:hidden items-center justify-center"> 
          <h1 className="text-4xl animate-fade-right animate-delay-1000 animate-duration-1000 md:text-5xl font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-full">
          Appointment
          </h1>
        </div>

        <div>
          <h1 className="text-5xl animate-fade-right animate-delay-1000 animate-duration-1000 lg:text-7xl hidden md:flex left-5 absolute top-10 w-min font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-2xl">
          Book An Appointment
          </h1>
          <button 
            onClick={() => navigate('/appointment')} 
            className="text-3xl lg:text-4xl gap-5 hidden animate-fade-left animate-duration-1000 animate-delay-1000 md:flex items-center absolute right-6 bottom-6 font-bold text-white bg-[#DDACCB] py-4 px-8 rounded-2xl"
          >
            Appointment  
            <span className="border-2 border-dotted p-1 rounded-full border-[#66475C]">
              <MdArrowOutward size={35} color="#66475C"/>
            </span>
          </button>
        </div>
      </div>

      {/* services we provide */}
      <div className="mt-20 lg:mt-28 lg:flex gap-5">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <h1 className="text-2xl text-center md:text-3xl lg:max-w-2xl lg:text-start font-bold lg:text-4xl">
          Cutting-Edge Care, Beautiful Smiles, Lasting Confidence!
          </h1>
          <h1 className="text-center lg:text-start lg:max-w-3xl lg:text-gray-700">
          By providing the latest technology and personalized care, we bring together healthy and beautiful smiles with lasting confidence. We offer you uninterrupted confidence and satisfaction.
          </h1>
          <img 
            src={appointImage2} 
            className="rounded-3xl mt-5 w-full h-48 object-cover md:h-64 lg:h-80 lg:rounded-xl"
            alt="About Gaga Dent"
          />
        </div>  
        <div className="hidden lg:flex lg:w-[40%]">
          <img 
            src={appointImage3} 
            className="rounded-3xl object-cover lg:rounded-xl"
            alt="Gaga Dent services"
          />
        </div>
      </div>

       {/* our dentists section */}
       <div className="mt-16 lg:mt-28">
        <OurDentists/> 
       </div>

        {/* contact form section */}
      <div className="mt-20 lg:mt-32">
       <Contact/>
      </div>
    </div>
  )
}

export default Appointment