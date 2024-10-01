import { useState, FormEvent } from 'react';
import contactImage from '../images/contact.avif'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
       e.preventDefault()
        toast.success('Message sent successfully!', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="lg:grid grid-cols-2 gap-4 items-center"> 
          <div className="space-y-7">
             <h1 className="text-3xl font-bold lg:text-5xl text-center lg:text-start">Book An Appointment</h1>
             <h1 className="lg:text-lg text-center lg:text-start">Discover How We Illuminate and Elevate Your Smiles.</h1>
             
             <form className="flex flex-col gap-3 lg:gap-5" onSubmit={handleSubmit}>
                <input 
                  className="p-3 lg:p-5 rounded-2xl bg-[#F5F7F8] w-full outline-none" 
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <input 
                  className="p-3 lg:p-5 rounded-2xl bg-[#F5F7F8] w-full outline-none" 
                  placeholder="Email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <textarea 
                  className="p-3 h-24 lg:h-48 lg:p-5 rounded-2xl bg-[#F5F7F8] w-full outline-none" 
                  placeholder="Message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" className="w-full hover:bg-opacity-80 text-center p-3 lg:p-5 rounded-2xl bg-[#FFDEF5] font-semibold">
                  Appointment
                </button>
             </form>
          </div> 

          <img src={contactImage} className="rounded-2xl object-cover hidden lg:flex w-full" alt="Contact" />
          <ToastContainer />
        </div>
    )
}

export default Contact