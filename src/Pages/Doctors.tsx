import doctorImage from '../images/doctorsImage.avif' 
import { useNavigate } from 'react-router-dom'
import { MdArrowOutward } from "react-icons/md";
import { doctors } from '../data/doctors';
import Contact from '../components/Contact';


const Doctors = () => {

const navigate = useNavigate()

    return (
        <div className="mt-7">
         {/* Top image with text */}
      <div className="relative">
        <img 
          src={doctorImage} 
          alt="mediciaImage" 
          className="rounded-2xl w-full h-64 object-cover md:h-96 lg:h-96"
        />
        <div className="absolute inset-0 flex md:hidden items-center justify-center"> 
          <h1 className="text-4xl animate-fade-right animate-duration-1000 animate-delay-1000 md:text-5xl font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-full">
            Doctors
          </h1>
        </div>

        <div>
          <h1 className="text-5xl animate-fade-right animate-duration-1000 animate-delay-1000 lg:text-7xl hidden md:flex left-5 absolute top-10 w-min font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-2xl">
            Doctors
          </h1>
          <button 
            onClick={() => navigate('/appointment')} 
            className="text-3xl animate-fade-left animate-delay-1000 animate-duration-1000 lg:text-4xl gap-5 hidden md:flex items-center absolute right-6 bottom-6 font-bold text-white bg-[#DDACCB] py-4 px-8 rounded-2xl"
          >
            Appointment  
            <span className="border-2 border-dotted p-1 rounded-full border-[#66475C]">
              <MdArrowOutward size={35} color="#66475C"/>
            </span>
          </button>
        </div>
      </div>

       {/* doctors section  */}
      <div className="mt-16 lg:mt-20 space-y-16 md:space-y-8">
        {doctors.map((doctor, index) =>  (
        <div key={doctor.name} className={`flex flex-col md:flex-row items-center md:gap-x-4 gap-y-6 lg:gap-x-16`}> 
          <div className={`md:w-1/2 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
          <img src={doctor.image} 
          className="w-full rounded-full"
          />
         </div>
         <div className="flex flex-col items-center gap-1 md:items-start md:w-1/2">
           <h1 className="text-xl">{doctor.occupation}</h1> 
           <h1 className="text-2xl lg:text-3xl font-bold">{doctor.name}</h1> 
           <h1>{doctor.description}</h1> 
           <button onClick={() => navigate('/appointment')} className="text-xl flex items-center gap-x-3 border p-3 transition-all ease-in-out duration-300 delay-300 hover:text-white rounded-full hover:bg-[#D7A7CA] border-[#D7A7CA] mt-3 lg:text-2xl font-semibold"> 
            Appointment 
            <span className="border-2 border-dotted p-1 rounded-full border-[#66475C]">
              <MdArrowOutward size={35} color="#66475C"/>
            </span>
            </button>
         </div>
        </div>
        ))}
      </div>


       {/* contact form section */}
       <div className="mt-20 lg:mt-32">
       <Contact/>
      </div>

        </div>
    )
}

export default Doctors