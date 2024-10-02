import Logo from '../images/Logo.png';
import { HiMiniBars2 } from "react-icons/hi2"; 
import {useState} from 'react'
import { MdClose } from "react-icons/md";
import NavLinks from './Navlinks';
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false) 

    const toggleNav = () => setOpenNav(!openNav) 

    return (
        <div>
            {/* navbar on small screens and md screens  */} 
            <div className="border-b border-b-gray-300 my-3 flex flex-col lg:hidden">
                <div className="flex flex-row justify-between py-1.5">
                    <Link to="/" className="inline-flex gap-x-2 items-center">
                        <img 
                            src={Logo} 
                            alt="medicia" 
                            className="w-7"
                        /> 
                        <h1 className="font-bold text-xl">Medicia</h1>
                    </Link> 

                    <button onClick={toggleNav} className="text-gray-600 hover:text-gray-800 transition-colors duration-200">
                        {openNav ? <MdClose size={38}/>: <HiMiniBars2 size={38} />}
                    </button>
                </div>

                {openNav ? <NavLinks closeNavLinks={toggleNav}/> : null}
            </div>

            {/* navbar in large screens */} 
            <div className="hidden lg:flex flex-row justify-between border-b border-b-gray-300 my-5 py-4">
            <Link to="/" className="inline-flex gap-x-2 items-center">
                        <img 
                            src={Logo} 
                            alt="medicia" 
                            className="w-7"
                        /> 
                        <h1 className="font-bold text-xl">Medicia</h1>
                    </Link> 

             <div>
             <NavLinks closeNavLinks={toggleNav}/>
            </div>
            </div>

        </div>
    );
};

export default Navbar;