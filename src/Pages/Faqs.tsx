import faqImage from '../images/faqImage.avif' 
import { MdArrowOutward } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Faq from '../components/Faq';

const Faqs = () => {

const navigate = useNavigate()

    return (
        <div className="mt-7">
          {/* Top image with text */}
      <div className="relative">
        <img 
          src={faqImage} 
          alt="mediciaImage" 
          className="rounded-2xl w-full h-64 object-cover md:h-96 lg:h-96"
        />
        <div className="absolute inset-0 flex md:hidden items-center justify-center"> 
          <h1 className="text-4xl md:text-5xl font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-full">
            FAQ
          </h1>
        </div>

        <div>
          <h1 className="text-5xl lg:text-7xl hidden md:flex left-5 absolute top-10 w-min font-bold text-white bg-[#828584] py-4 px-8 bg-opacity-70 rounded-2xl">
            FAQ
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

       {/* faq sections */} 
       <div className="mt-16 lg:mt-20">
        <div className="space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">I'm here to answer all your questions</h1>
            <h1 className="md:max-w-3xl lg:max-w-4xl lg:text-lg">Welcome to our Frequently Asked Questions section, designed to address common inquiries and provide insights into your dental care. Explore these answers to empower yourself with essential knowledge for better oral health and well-being.</h1>
        </div>
       </div>  

       <div className="mt-16 lg:mt-20">
        <Faq/>
       </div>

        </div>
    )
}

export default Faqs