import { FiSearch } from "react-icons/fi";
import heroPhoto from "../assets/HeroPhoto.png";

const Herosection = () => {
  return (
    <div className="bg-[#F8F9FB] flex justify-evenly">
      <div className="flex justify-evenly items-center w-[80rem] gap-40">
        <div className="text-left bg-gray-50 relative">
          <h1 className="text-5xl font-bold text-gray-900">
            The remote job board you'll actually enjoy using
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Experience the remote ecosystem – find a remote job you love,
            research the fastest-growing remote companies, and hire experienced
            remote workers.
          </p>
          <div className="mt-8 flex justify-center space-x-4 left-0 absolute">
            <button className=" bg-white hover:bg-[#F9F9FB] text-black px-4 py-2 rounded-lg border border-gray-300">
              Hire talent
            </button>
            <button className="bg-[#553C9A] text-white px-6 py-3 rounded flex justify-center items-center gap-2">
              <FiSearch className="text-xl" />
              Find a job
            </button>
          </div>
        </div>
        <div className="h-[35rem] w-[38rem] text-black  flex justify-center items-center">
          <img src={heroPhoto} alt="" className=" pt-12" />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
