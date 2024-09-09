import logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <header className="flex justify-center py-4 px-6 bg-[#FFFFFF] z-10 fixed top-0 left-0 w-full">
      <div className="flex justify-between items-center w-[80rem]">
        <div className="flex items-center space-x-4 ">
          <img src={logo} alt="logo" className="h-6" />
        </div>
        <div className="flex space-x-4 items-center">
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-black hover:text-gray-900">
              Jobs
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Companies
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Talent
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Salaries
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Advice
            </a>
            <a href="#" className="text-black hover:text-gray-900">
              Updates
            </a>
          </nav>
          <a href="#" className="text-black hover:text-gray-900">
            Log in
          </a>
          <a
            href="#"
            className="bg-white hover:bg-[#F9F9FB] text-black px-4 py-2 rounded-lg border border-gray-300"
          >
            Sign up
          </a>
          <a href="#" className=" bg-[#553C9A] text-white px-4 py-2 rounded-lg">
            Post a job
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
