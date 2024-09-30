import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface NavLinkProp {
    closeNavLinks: () => void;
}

const NavLinks = ({ closeNavLinks }: NavLinkProp) => {
    const location = useLocation();

    const links = [
        { name: "About Us", url: '/about' },
        { name: "Doctors", url: "/doctors" },
        { name: "Book An Appointment", url: "/appointment" },
        { name: "Services", url: "/services" },
        { name: "FAQ", url: "/faq" }
    ];

    return (
        <nav className="flex flex-col gap-y-2 lg:flex-row lg:gap-x-11 mt-7 lg:mt-0 mb-2 lg:mb-0 animate-fade-down lg:animate-none">
            {links.map((link) => (
                <Link 
                    key={link.url}
                    onClick={closeNavLinks} 
                    to={link.url} 
                    className={`font-semibold text-2xl lg:text-lg lg:font-normal ${
                        location.pathname === link.url ? 'border-b border-black' : ''
                    }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default NavLinks;