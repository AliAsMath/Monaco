import Link from "next/link";
import { useRouter } from "next/router";
import { IoFingerPrint } from "react-icons/io5";

const Header = () => {
  const router = useRouter();
  return (
    <div className="relative z-10 shadow-2xl select-none shadow-monako-1">
      <header className="fixed w-screen text-lg font-bold bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 font-Yekan text-monako-2 bg-monako-1">
        <nav className="flex items-center justify-between p-4">
          <Link href="/login">
            <a
              className={
                "flex justify-start hover:text-monako-5 " +
                (router.pathname === "/login" && "text-monako-3")
              }
            >
              <IoFingerPrint className="text-3xl" />
              ورود
            </a>
          </Link>

          <ul dir="rtl" className="flex items-center justify-between w-2/6">
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
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
