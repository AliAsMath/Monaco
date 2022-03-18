import { IoFingerPrint } from "react-icons/io5";
import HeaderItem from "./headerItem";
import { useSession } from "next-auth/react";
import BasketSVG from "../../public/svg/buy-svgrepo-com.svg";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Header = () => {
  const { data: session, status } = useSession();
  const basketLength = useSelector((state) => state.basket.length);
  const router = useRouter();

  return (
    <header className="fixed z-10 w-screen p-3 px-5 text-sm font-bold sm:px-10 md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 font-Yekan text-monako-2 bg-monako-1">
      <ul dir="rtl" className="flex items-center justify-around w-full gap-8 ">
        <HeaderItem src="/">صفحه اصلی</HeaderItem>
        <HeaderItem src="/store">محصولات</HeaderItem>
        <HeaderItem src="/about">درباره ما</HeaderItem>
        {session ? (
          <>
            <HeaderItem className="mr-auto" src="/profile">
              پروفایل
            </HeaderItem>
            <div
              className="relative cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <p className="absolute w-4 text-[12px] text-center  leading-[14px] rounded-full bg-monako-1 text-monako-5 right-0 top-0">
                {basketLength}
              </p>
              <BasketSVG className="w-8 h-8 fill-monako-2" />
            </div>
          </>
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
