import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const usePath = useLocation().pathname;
  return (
    <div>
      <Navbar fluid rounded className="z-1 mx-20">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center uppercase hover:text-red-400 whitespace-nowrap text-xl font-semibold dark:text-white">
            House Booking
          </span>
        </Navbar.Brand>
        <form className="flex items-center ">
          <input
            type="text"
            placeholder="search..."
            className="bg-transparent rounded w-24 sm:w-64"
          ></input>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70 rounded -ml-5"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </form>
        <Navbar.Toggle />
        <Navbar.Collapse>
        <Navbar.Link active={usePath === '/'} as={'div'}>
          <Link to={'/'} >Home</Link>
        </Navbar.Link>
        <Navbar.Link active={usePath === '/about'} as={'div'}>
          <Link to={'/about'} >About</Link>
        </Navbar.Link>
        <Navbar.Link active={usePath === '/singin'} as={'div'}>
          <Link to={'/singin'} >Singin</Link>
        </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;


