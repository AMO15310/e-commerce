import searchicon from "../../assets/search-icon.png";
import shoppingbagicon from "../../assets/shopping-bag.png";
import shoppingcart from "../../assets/shopping-cart.png";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header flex  flex-col w-[100vw]  fixed top-0 left-0">
        <div className="top h-[45px] bg-black "></div>
        <div className="bottom w-full  h-[60px] flex flex-row justify-around items-center">
          <ul className="flex gap-[2rem] cursor-pointer">
            <NavLink to="/landingpage1">
              <li>Ecommerce</li>
            </NavLink>
            <NavLink to="/shop">
              <li>Shop</li>
            </NavLink>
            <NavLink to="/landingpage2">
              <li>Stories</li>
            </NavLink>
            <li>About</li>
            <li>
              <div className="search flex gap-[1rem]  text-gray-500">
                {" "}
                <img
                  className=" h-[20px] w-[20px]"
                  src={searchicon}
                  alt="search-icon"
                />{" "}
                <input
                  type="text"
                  placeholder="Search"
                  className=" focus:outline-none"
                />
              </div>
            </li>
          </ul>
          <div className="utilities flex gap-4 sm:gap-8">
            <div className="bag flex gap-2">
              <img
                src={shoppingbagicon}
                className="h-[25px]"
                alt="shoppingbagicon"
              />
              3
            </div>
            <NavLink to="/login">
              <div className="login-tag">Login</div>
            </NavLink>
            <div className="shopping-cart">
              <img
                src={shoppingcart}
                alt="shoppingcarticon"
                className="h-[40px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
