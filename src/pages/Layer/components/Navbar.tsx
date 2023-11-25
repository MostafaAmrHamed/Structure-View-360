const Navbar = () => {
  return (
    <div className="px-5 md:px-20 py-4 text-2xl shadow-lg">
      <ul className="flex">
        <li className="px-5 text-[#6c757c]">{"<--"} BACK</li>
        <li>
          <span className="border-r-2 border-gray-500"> </span>
        </li>
        <li className="px-5">LAYER 1</li>
      </ul>
    </div>
  );
};

export default Navbar;
