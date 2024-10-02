import aboutImage from '../images/aboutImage.avif'
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { aboutServices } from '../data/aboutServices';
import aboutImage2 from '../images/aboutImage2.avif' 
import aboutImage3 from '../images/aboutImage3.avif'
import Faq from '../components/Faq';
import OurDentists from '../components/OurDentists';
import AnimatedTestimonials from '../components/animatedTestimonials';
import Testimonals from '../components/Testimonials';
import Contact from '../components/Contact';

const About = () => {
  const navigate = useNavigate() 

  return (
    <div className="mt-7"> 
      {/* Top image with text */}
      <div className="relative">
        <img 
          src={aboutImage} 
          alt="mediciaImage" 
          className="rounded-2xl w-full h-64 object-cover md:h-96 lg:h-96"
        />
        <div className="absolute inset-0 flex md:hidden items-center justify-center"> 
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-full">
            About
          </h1>
        </div>

        <div>
          <h1 className="text-5xl lg:text-7xl hidden md:flex left-5 absolute top-10 w-min font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-2xl">
            About
          </h1>
          <button 
            onClick={() => navigate('/appointment')} 
            className="text-3xl lg:text-4xl gap-5 hidden md:flex items-center absolute right-6 bottom-6 font-bold text-white bg-[#DDACCB] py-4 px-8 rounded-2xl"
          >
            Appointment  
            <span className="border-2 border-dotted p-1 rounded-full border-[#66475C]">
              <MdArrowOutward size={35} color="#66475C"/>
            </span>
          </button>
        </div>
      </div> 
      
      {/* Our services we provide */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16 lg:mt-20">
        {aboutServices.map((service) => (
          <div 
            key={service.name}
            className={`border  ${service.border} ${service.outColor} flex flex-col items-center transition ease-in-out delay-100 duration-500 lg:hover:scale-110 justify-center gap-1 p-5 md:p-8 rounded-3xl`}
          > 
            <h1 className="text-[#353D4C] text-lg md:text-xl lg:text-3xl font-semibold">
              {service.name}
            </h1>
            <h1 className="text-[#353d4C] text-center">
              {service.description}
            </h1>
            <button 
              onClick={() => navigate(`${service.link}`)} 
              className={`text-2xl flex flex-row justify-center gap-3 items-center mt-5 lg:text-3xl font-semibold text-[#353d4c] ${service.color} w-full p-5 lg:py-7 rounded-full`}
            >
              {service.heading} 
              <span className="border p-2 animate-spin-slow rounded-full border-dotted border-[#66475C]">
                <MdArrowOutward size={30} color="#66475C"/>
              </span>
            </button>
          </div>
        ))}
      </div>

      <div className="mt-20 lg:mt-28 lg:flex gap-5">
        <div className="flex flex-col gap-2 lg:w-[60%]">
          <h1 className="text-2xl text-center md:text-3xl lg:max-w-xl lg:text-start font-bold lg:text-4xl">
            Start your smile transformation journey with us.
          </h1>
          <h1 className="text-center lg:text-start lg:max-w-3xl lg:text-gray-700">
            Welcome! We are Gaga Dent, a team committed to providing high-quality dental care services. At Gaga Dent, we focus on transforming smiles by offering personalized care for each patient, delivered by expert dentists and experienced staff.
          </h1>
          <img 
            src={aboutImage2} 
            className="rounded-3xl mt-5 w-full h-48 object-cover md:h-64 lg:h-80 lg:rounded-xl"
            alt="About Gaga Dent"
          />
        </div>  
        <div className="hidden lg:flex lg:w-[40%]">
          <img 
            src={aboutImage3} 
            className="rounded-3xl object-cover lg:rounded-xl"
            alt="Gaga Dent services"
          />
        </div>
      </div>

       {/* faq section */}
       <div className="mt-16 lg:mt-32">
        <Faq/>
       </div>

       {/* our dentists section */}
       <div className="mt-16 lg:mt-28">
        <OurDentists/> 
       </div>

        {/* animated testimonials on lg screens */}
      <div className="mt-24 hidden lg:flex">
       <AnimatedTestimonials/>
      </div>
      
      {/* regular testimonials section on sm and md */}
      <div className="mt-20 flex lg:hidden">
         <Testimonals/>
      </div>

      {/* contact form section */}
      <div className="mt-20 lg:mt-32">
       <Contact/>
      </div>

    </div>
  )
}

export default About