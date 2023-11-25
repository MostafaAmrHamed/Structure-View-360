import { Link } from "react-router-dom";
import { IoLayers } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="px-5 md:px-20 py-4 text-2xl shadow-lg animate__animated animate__fadeInDown">
      <ul className="flex">
        <li className="flex gap-2 px-5 text-[#6c757c]">
          <Link
            to={`/`}
            className="flex items-center gap-2 px-5 text-[#6c757c]"
          >
            <IoLayers />
            BACK
          </Link>
        </li>
        <li>
          <span className="border-r-2 border-gray-500"> </span>
        </li>
        <li className="px-5">LAYER</li>
      </ul>
    </div>
  );
};

export default Navbar;
