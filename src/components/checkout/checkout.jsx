import CartBox from "../utilities/CartBox";
import Header from "../header-footer/header";
const Checkout = () => {
  return (
    <>
      <div className=" flex flex-col">
        <div className="">
          <Header />
        </div>
        <div className=" font-semibold text-2xl p-5 pt-[8rem]">Checkout</div>
        <div className="flex flex-col items-center pt-5">
          <p className="">Your Cart</p>
          <CartBox />
          <CartBox />
          <button className="w-[397px] h-[50px] bg-black text-white font-bold">
            Continue to checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
