import { useRouter } from "next/router";
import Link from "next/link";

const HeaderItem = ({ children, src, className }) => {
  const router = useRouter();
  return (
    <li
      className={
        className +
        " hover:text-monako-5 " +
        (router.pathname === src && "text-monako-3")
      }
    >
      <Link href={src}>{children}</Link>
    </li>
  );
};

export default HeaderItem;
