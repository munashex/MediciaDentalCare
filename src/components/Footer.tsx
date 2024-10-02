import Logo from '../images/Logo.png';
import { Link, useNavigate } from 'react-router-dom';

interface ScrollToTopLinkProps {
  to: string;
  children: React.ReactNode;
  [key: string]: any;
}

// Custom Link component that scrolls to top after navigation
const ScrollToTopLink: React.FC<ScrollToTopLinkProps> = ({ to, children, ...props }) => {
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <Link to={to} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

const Footer: React.FC = () => {
  const links = [
    { name: "About Us", url: '/about' },
    { name: "Doctors", url: "/doctors" },
    { name: "Book An Appointment", url: "/appointment" },
    { name: "Services", url: "/services" },
    { name: "FAQ", url: "/faq" }
  ];

  return (
    <footer className="mt-20 rounded-3xl lg:mt-28 my-16 bg-[#26292F] p-5 lg:p-10">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between">
        <div className="mb-6 md:mb-0">
          <img src={Logo} alt="Logo" className="w-12 rounded-lg" />
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
          {links.map((link, index) => (
            <ScrollToTopLink
              key={index}
              to={link.url}
              className="text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link.name}
            </ScrollToTopLink>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
