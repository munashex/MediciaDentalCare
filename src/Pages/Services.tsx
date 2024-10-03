import serviceImage from '../images/serviceImage.avif'
import { useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import serviceImage1 from '../images/serviceImage1.avif' 
import serviceImage2 from '../images/serviceImage2.avif'
import serviceImage3 from '../images/serviceImage3.avif'
import serviceImage4 from '../images/serviceImage4.avif' 
import serviceImage5 from '../images/serviceImage5.avif'
import serviceImage6 from '../images/serviceImage6.avif'
import serviceImage7 from '../images/serviceImage7.avif'
import Contact from '../components/Contact';

function Services() {
  const navigate = useNavigate()  

  return (
    <div className="mt-7">
      {/* Top image with text */}
      <div className="relative">
        <img 
          src={serviceImage} 
          alt="mediciaImage" 
          className="rounded-2xl w-full h-64 object-cover md:h-96 lg:h-96"
        />
        <div className="absolute inset-0 flex md:hidden items-center justify-center"> 
          <h1 className="text-4xl md:text-5xl animate-fade-right animate-delay-1000 animate-duration-1000 font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-full">
            Services
          </h1>
        </div>

        <div>
          <h1 className="text-5xl lg:text-7xl hidden md:flex  animate-fade-right animate-delay-1000 animate-duration-1000 left-5 absolute top-10 w-min font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-2xl">
            Services
          </h1>
          <button 
            onClick={() => navigate('/appointment')} 
            className="text-3xl lg:text-4xl gap-5 animate-fade-left animate-duration-1000 animate-delay-1000 hidden md:flex items-center absolute right-6 bottom-6 font-bold text-white bg-[#DDACCB] py-4 px-8 rounded-2xl"
          >
            Appointment  
            <span className="border-2 border-dotted p-1 rounded-full border-[#66475C]">
              <MdArrowOutward size={35} color="#66475C"/>
            </span>
          </button>
        </div>
      </div>

      {/* Services we provide on small screens */}
      <div className="flex flex-col md:hidden gap-3 mt-11">
        <div className="bg-[#E4EDE4] p-5 rounded-3xl relative">
          <img src={serviceImage1} alt="medicia"
            className="rounded-full mix-blend-multiply w-full"
          />
          <div className="absolute text-white font-extrabold flex flex-col items-center justify-center inset-1">
            <h1 className="text-lg bg-black bg-opacity-30 text-center p-1">Basic Dental Care</h1> 
            <h1 className="bg-black bg-opacity-30 text-center p-1">Discover How We Illuminate and Elevate Your Smiles.</h1>
          </div>
        </div> 

        <div className="bg-[#F9F8F2] p-5 rounded-3xl flex flex-col items-center justify-center">
          <img src={serviceImage2} className="w-48 h-48 mix-blend-luminosity"/>
          <h1 className="text-lg font-bold">Endotonti</h1>
        </div>

        <div className="bg-[#F2F4F9] p-5 rounded-3xl flex flex-col items-center justify-center">
          <img src={serviceImage3} className="h-56 mix-blend-multiply" />
          <h1 className="text-lg font-bold">Dental Implant</h1>
        </div>

        <div className="bg-[#101014] rounded-3xl relative">
          <img src={serviceImage4} className="rounded-3xl h-72 object-cover w-full"/>
          <h1 className="text-2xl font-semibold absolute top-3 left-5 text-[#D1CFCF]">Gaga Dent</h1>
          <div className="p-5">
            <h1 className="text-center text-[#D1CFCF]">Discover How We Illuminate and Elevate Your Smiles.</h1>
          </div>
        </div>

        <div className="bg-[#EDE9E4] rounded-3xl">
          <div className="p-5 flex flex-col items-center justify-center">
            <h1 className="text-lg font-bold">Pedodonti</h1>
            <h1 className="text-center">Pedodonti Discover How We Illuminate and Elevate Your Smiles.</h1>
          </div>
          <div className="flex justify-center">
            <img src={serviceImage5} className="h-56"/>
          </div>
        </div> 

        <div className="bg-[#F8F2F9] p-5 rounded-3xl flex flex-col items-center justify-center">
          <img src={serviceImage6} className="w-48 h-48 mix-blend-luminosity"/>
          <h1 className="text-lg font-bold">Prosthodonti</h1>
        </div>

        <div className="bg-[#EDE9E4] p-5 rounded-3xl relative">
          <img src={serviceImage7} alt="medicia"
            className="rounded-full w-full mix-blend-multiply"
          />
          <div className="absolute text-white font-extrabold flex flex-col items-center justify-center inset-1">
            <h1 className="text-lg bg-black bg-opacity-30 text-center p-1">Aesthetic Care</h1> 
            <h1 className="bg-black bg-opacity-30 text-center p-1">Discover How We Illuminate and Elevate Your Smiles.</h1>
          </div>
        </div> 
      </div>        

      {/* services we provide on md and lg screens  */} 
      <div className="mt-16 space-y-3 hidden md:grid"> 
        {/* first grid  */}
        <div className="grid grid-cols-4 gap-3"> 
          <div className="bg-[#E4EDE4] col-span-3 rounded-3xl">
            <div className="flex flex-row justify-between  p-3 ">
              <div className="flex flex-col  justify-center">
               <h1 className="text-lg lg:text-3xl font-bold">Dental Basic Care</h1> 
               <h1 className="">Discover How We Illuminate and Elevate Your Smiles.</h1>
              </div> 
               <div>
              <img src={serviceImage1} className="rounded-full h-40 mix-blend-luminosity"/>
              </div>
            </div>
          </div>

          <div className="bg-[#F9F8F2] rounded-3xl">
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={serviceImage2} className="h-40"/> 
              <h1 className="md:text-lg text-xl lg:font-semibold">Endotonti</h1>
            </div>
          </div>
        </div>  
        
        {/* second grid */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-[#F2F4F9] flex rounded-3xl flex-col items-center justify-center">    
             <img src={serviceImage3} className="h-60"/> 
             <h1 className="text-lg lg:text-2xl font-semibold">Dental Implant</h1>
          </div>

          <div className="rounded-3xl col-span-2 relative">
            <img src={serviceImage4} className="rounded-3xl h-96 w-full object-cover"/> 
            <div className="bottom-2 bg-black bg-opacity-20 rounded-xl absolute text-[#D1CFCF] p-3">
              <h1 className="lg:text-lg">Discover How We Illuminate and Elevate Your Smiles.</h1>
              <h1 className="text-xl lg:text-2xl font-semibold">Gaga Dent</h1>
            </div>
          </div>

          <div className="bg-[#EDE9E4] relative rounded-3xl flex flex-col">
           <div className="md:p-1 p-3 mt-5">
            <h1 className="text-lg lg:text-2xl font-semibold text-center">Pedodonti</h1>
            <h1 className="text-center">Discover How We Illuminate and Elevate Your Smiles.</h1>
           </div>
           
           <div className="flex justify-center">
           <img src={serviceImage5} className="h-60 absolute bottom-0"/>
           </div>
          </div>
        </div>

        {/* third grid*/}
        <div className="grid grid-cols-4 gap-3"> 
          <div className="bg-[#F8F2F9] rounded-3xl">
            <div className="flex flex-col justify-center items-center gap-1">
              <img src={serviceImage6} className="h-40"/> 
              <h1 className="md:text-lg text-xl lg:font-semibold">Prosthodonti</h1>
            </div>
          </div>

          <div className="bg-[#EDE9E4] col-span-3 rounded-3xl">
            <div className="flex flex-row justify-between  p-3 ">
              <div className="flex flex-col  justify-center">
                <h1 className="text-lg lg:text-3xl font-bold">Aesthetic Care</h1> 
                <h1 className="">Discover How We Illuminate and Elevate Your Smiles</h1>
              </div> 
              <div>
                <img src={serviceImage7} className="rounded-full h-40 mix-blend-luminosity"/>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* contact form section */}
       <div className="mt-20 lg:mt-32">
       <Contact/>
      </div>
    </div>
  )
}

export default Services