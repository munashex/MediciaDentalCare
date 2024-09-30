import {useState} from 'react' 
import {services} from '../data/services'

type TabsTypes = 'Dental Implant Care' | 'Aesthetic Care' | 'Endodonti ' | 'Prosthodonti'

function Services() {
const [tab, setTabs] = useState<TabsTypes>('Dental Implant Care')

const findServices = services.find((service) => service.name === tab) 


const changeTab = (name: TabsTypes) => {
    setTabs(name)
 }

  return (
    <div>
        <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Services</h1>
        
        {/* tabs on sm and md screens */}
        <div className={`${findServices?.color} flex flex-col lg:hidden px-5 py-11 mt-7 rounded-xl`}>
         <div className="gap-y-2 mb-11 flex flex-col items-center">
            <h1 className="text-2xl text-center font-semibold">{findServices?.name}</h1> 
            <h1 className="text-center">{findServices?.description}</h1>
            <img src={findServices?.image} className="w-48 mt-3" />
         </div>
          {services.map((service) => (
            <div key={service.id}> 
             <div className="flex flex-col px-6"> 
                <button onClick={() => changeTab(service.name as TabsTypes)} className={`mt-2 ${service.name === tab ? 'p-2 bg-black rounded-2xl text-white text-xl' : `p-2 rounded-xl ${findServices?.innerColor} text-lg `}`}>{service.name}</button>
             </div>
            </div>
          ))}
        </div>

        {/* tabs on lg screens  */} 
    <div className={`${findServices?.color} p-7 mt-11 rounded-xl hidden lg:flex w-full`}>
  <div className="flex flex-row justify-between w-full">
    <div className="w-[60%]">
      <div className="flex flex-row gap-x-6 items-center">
        <span className={`text-9xl font-bold px-7 py-16 rounded-2xl ${findServices?.innerColor}`}>{findServices?.id}</span>
        <div className='space-y-2'> 
          <h1 className="text-5xl font-semibold">{findServices?.name}</h1>
          <h1>{findServices?.description}</h1>
        </div>
      </div>

      <div className="mt-16">
        {services.map((service) => (
          <div key={service.id}> 
            <div className="flex flex-col"> 
              <button onClick={() => changeTab(service.name as TabsTypes)} className={`mt-2 w-[70%] ${service.name === tab ? 'p-3 bg-black rounded-2xl text-white text-xl' : `p-2 rounded-xl ${findServices?.innerColor} text-lg `}`}>{service.name}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    <div className="w-[40%] flex items-center">
      <img src={findServices?.image} className='w-full h-auto object-contain' alt={findServices?.name} />
    </div>
  </div>
</div>
 
 </div>
  )
}

export default Services