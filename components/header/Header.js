import { IoFingerPrint } from "react-icons/io5";
import HeaderItem from "./headerItem";
import { useSession } from "next-auth/react";
import BasketSVG from "../../public/svg/buy-svgrepo-com.svg";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { basketActions } from "../../redux/basket-store";

const Header = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("basket")))
      dispatch(basketActions.set(JSON.parse(localStorage.getItem("basket"))));
    else dispatch(basketActions.set([]));
  }, [dispatch]);

  return (
    <header className="fixed z-10 w-screen p-3 px-5 text-xs font-bold sm:px-10 md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 font-Yekan text-monako-2 bg-monako-1">
      <ul
        dir="rtl"
        className="flex items-center justify-around w-full gap-2 sm:gap-8 "
      >
        <HeaderItem src="/">صفحه اصلی</HeaderItem>
        <HeaderItem src="/store">محصولات</HeaderItem>
        <HeaderItem src="/about">درباره ما</HeaderItem>
        {session ? (
          <div
            className="relative mr-auto cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <p className="absolute w-4 text-[12px] text-center  leading-[14px] rounded-full bg-monako-1 text-monako-5 right-0 top-0">
              {basket.length}
            </p>
            <BasketSVG className="w-8 h-8 fill-monako-2" />
          </div>
        ) : (
          <>
            <HeaderItem className="mr-auto" src={"/auth/signup"}>
              <a className="flex items-center justify-start ">
                ثبت نام
                <IoFingerPrint className="text-3xl" />
              </a>
            </HeaderItem>
            <HeaderItem src={"/auth/login"}>
              <a className="flex items-center justify-start ">
                ورود
                <IoFingerPrint className="text-3xl" />
              </a>
            </HeaderItem>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
