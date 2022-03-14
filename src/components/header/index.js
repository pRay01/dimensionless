import { Link } from "react-router-dom";
import { BsMoonFill, BsFillSunFill } from "react-icons/bs";
import logo from '../../assets/ds-b-2500/ds-b-logo.png'
import darklogo from '../../assets/ds-w-500/ds-logo.png'
function Header(props) {
  return (
    <nav className="flex flex-wrap items-center justify-between py-10 lg:py-3  lg:px-36 dark:bg-[#202124] dark:text-white">
      <div className="flex w-full justify-center 2xl:justify-start  items-center lg:w-6/12">
        <Link to="/">
          {" "}
          <div className="">
            <img className=" w-10 lg:w-20 " src={
              props.toggleDark ? darklogo : logo
            } alt="logo" />
          </div>{" "}
        </Link>
        <h1 className=" lg:pr-24 2xl:pr-0 pl-2 montserrat font-semibold tracking-widest text-2xl text-brand_gray dark:text-white">
          DIMENSIONLESS
        </h1>
      </div>
      <div className="hidden lg:block w-6/12">
        <ul className="flex items-center justify-end">
          <li>
            <div className="text-[#707070] cursor-pointer text-sm lg:text-xl 2xl:text-4xl mr-4">
              {!props.toggleDark ? (
                <BsMoonFill onClick={() => props.handleModeChange()} />
              ) : (
                  <BsFillSunFill onClick={() => props.handleModeChange()} />
              )}
            </div>
          </li>
          <li>
            <Link to="/explore">
              <p className="px-4 text-[#707070] text-sm lg:text-xl 2xl:text-4xl font-semibold">
                Explore
              </p>
            </Link>
          </li>
          <li>
            <Link to="/community">
              <p className="px-4  text-[#707070] text-sm lg:text-xl 2xl:text-4xl font-semibold">
                Community
              </p>
            </Link>
          </li>
        </ul>
      </div>
      <div></div>
    </nav>
  );
}
export default Header;
