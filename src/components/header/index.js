import { Link } from "react-router-dom";
import { BsMoonFill } from "react-icons/bs";
import logo from '../../assets/ds-b-2500/ds-b-logo.png'
function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between lg:px-40">
      <div className="flex w-full justify-center items-center lg:w-6/12">
      <Link to="/"> <div className="">
          <img className=" w-10 lg:w-20 px-3" src={logo} alt="logo" />
        </div> </Link>
        <h1 className=" montserrat font-semibold tracking-widest text-2xl  text-[#707070]">
          DIMENSIONLESS
        </h1>
      </div>
      <div className="hidden lg:block w-6/12" >
        <ul className="flex items-center justify-end">
          <li>
            <div className="text-[#707070]">
              <BsMoonFill />
            </div>
          </li>
          <li>
            <Link to="/explore">
            <p className="px-4 text-[#707070] text-sm font-semibold">
              Explore
            </p>
            </Link>
          </li>
          <li>
            <p className="px-4  text-[#707070] text-sm font-semibold">
              Community
            </p>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
export default Header;
