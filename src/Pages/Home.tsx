import dentalVideo from '../videos/dental.mp4'
import { FaStarOfLife } from "react-icons/fa6";
import aestheticCare from '../images/aestheticcare.avif' 
import dentalimpact from '../images/dentalimpact.avif'
import Services from '../components/services';

function Home() {
  return (
    <div className="mt-7">
      {/* top content */}
      <div> 
        <h1 className="font-bold text-4xl lg:text-6xl text-[#26292F">A dream smile is a reality.</h1>
         
         <div className="mt-8 flex flex-col lg:flex-row gap-7">
           <video 
            src={dentalVideo}
            muted
            autoPlay
            playsInline
            loop
            className="rounded-2xl lg:w-1/2"
          />
          <div className="flex flex-col gap-7 lg:w-1/2">
            <h1 className="text-lg text-[#4d4f57]">Choose Our Dental Clinic as Your Go-To Destination for Trusted and Compassionate Dental Health Solutions. Your Smile Is More Than Just Teeth to Us—It's</h1>
            
            <div className="space-y-4">
              <button className="w-full text-[#3E4146] hover:bg-black hover:text-white inline-flex items-center gap-2.5 p-3 border-dotted rounded-full border-black border-2" >
                <FaStarOfLife size={28} color="#30B9B9"/>
                <span className="text-xl font-semibold">Book Now</span>
              </button>
              <button className="w-full text-[#3E4146] hover:bg-black hover:text-white inline-flex items-center gap-2.5 p-3 rounded-full border-dotted border-black border-2" >
                <FaStarOfLife size={28} color="#30B9B9"/>
                <span className="text-xl font-semibold">Discover</span>
              </button>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row w-full">
              <div className="p-3 w-full bg-[#D7FFE9] rounded-2xl flex flex-row justify-between">
                <div>
                 <FaStarOfLife size={30} color="#26292F" className="animate-spin-slow"/>
                  <h1 className="text-xl font-bold text-[#26292F]">Dental</h1>
                  <h1 className="text-xl font-bold text-[#26292F]">Implant</h1>
                </div>
                <img src={dentalimpact} className="w-20"/>
              </div>

              <div className="p-3 w-full bg-[#FFD7F2] rounded-2xl flex flex-row justify-between">
                <div>
                  <FaStarOfLife className="animate-spin-slow" size={30} color="#26292F"/> 
                  <h1 className="text-xl font-bold text-[#26292F]">Aesthetic</h1>
                  <h1 className="text-xl font-bold text-[#26292F]">Care</h1>
                </div>
                <img src={aestheticCare} className="w-20"/>
              </div>
            </div>
          </div>
        </div>
      </div> 

      {/* services  */}
      <div className="mt-16 lg:mt-20"> 
      <Services/>
      </div>

      
    </div>
  )
}

export default Home