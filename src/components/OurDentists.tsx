import dentists from "../data/dentists"

const OurDentists = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Meet With Dentist</h1> 
          
            <div className="border-2 border-black border-dotted mt-5 grid grid-cols-1 md:grid-cols-2 divide-y divide-black divide-dotted md:divide-y-0 md:divide-x">
                {dentists.map((dentist) => (
                    <div key={dentist.name}> 
                        <div className="flex flex-row items-center justify-around p-3 border-2 border-dotted border-black"> 
                            <h1 className="text-xl font-semibold lg:text-2xl">{dentist.name}</h1> 
                            <h1 className="py-2 px-4 rounded-full bg-[#FFD7F2] lg:text-lg">{dentist.occupation}</h1>
                        </div>
                        <img src={dentist.image} className="rounded-full p-3 lg:p-9"/>
                    </div>
                ))}
            </div>
            <h1 className="text-lg md:text-xl font-semibold text-center mt-11 lg:text-3xl">Where Cutting-Edge Dental Expertise Meets Personalized Care: Your Destination for Holistic Dental Health, Beautiful Smiles, and Lasting Confidence.</h1>
        </div>
    )
}

export default OurDentists