import logo from "../assets/react.svg";
function NavBar() {
  return (
    <nav className=" w-full flex justify-between text-white  bg-gray-950 p-4  text-md  ">
      <div className=" flex gap-3 items-center ">
        <img src={logo} alt="logo" />
        <span> APP</span>
      </div>
      <ul className=" flex gap-5 justify-center ">
        <li>Home</li>
        <li>About</li>
        <li className="w-full h-full  bg-blue-400 rounded-md px-2 ">Profile</li>
      </ul>
    </nav>
  );
}

export default NavBar;
