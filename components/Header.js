import Link from "next/link";
import { useRouter } from "next/router";
import { IoFingerPrint } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  return (
    <div className="relative z-10 ">
      <header className="fixed w-screen p-3 px-5 sm:px-10 text-sm font-bold md:text-lg bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 font-Yekan text-monako-2 bg-monako-1">
        <ul
          dir="rtl"
          className="flex items-center justify-around w-full gap-8 "
        >
          <li
            className={
              "hover:text-monako-5 " +
              (router.pathname === "/" && "text-monako-3")
            }
          >
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li
            className={
              "hover:text-monako-5 " +
              (router.pathname === "/store" && "text-monako-3")
            }
          >
            <Link href="/store">فروشگاه</Link>
          </li>
          <li
            className={
              "hover:text-monako-5 " +
              (router.pathname === "/about" && "text-monako-3")
            }
          >
            <Link href="/about">درباره ما</Link>
          </li>
          <li className="mr-auto">
            <Link href="/login">
              <a
                className={
                  "flex items-center justify-start hover:text-monako-5 " +
                  (router.pathname === "/login" && "text-monako-3")
                }
              >
                ورود
                <IoFingerPrint className="text-3xl" />
              </a>
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
