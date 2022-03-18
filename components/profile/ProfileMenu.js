import { signOut } from "next-auth/react";
import { useState } from "react";
import HamburgerMenu from "../ui/hamburgerMenu";

const ProfileMenu = ({ setShowComponent, showComponent }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const signOutHandler = (e) => {
    signOut();
  };

  const expandHandler = () => {
    if (isExpand) {
      setIsShow(false);
      setTimeout(() => {
        setIsExpand((prevState) => !prevState);
      }, 150);
    } else {
      setIsExpand((prevState) => !prevState);
      setTimeout(() => {
        setIsShow(true);
      }, 250);
    }
  };

  return (
    <menu
      className={
        " h-screen p-2 pt-14 transition-all bg-monako-1 " +
        (isExpand ? "w-1/4" : "w-9")
      }
    >
      <HamburgerMenu isExpand={isExpand} onClick={expandHandler} />
      <ul
        className={`flex pt-2 flex-col items-end gap-2 transition-opacity font-Yekan text-monako-white ${
          isShow ? "opacity-100" : "opacity-0"
        }`}
      >
        <li
          className={`cursor-pointer hover:text-monako-5 ${
            showComponent === "basket" && "text-monako-5"
          }`}
          onClick={() => setShowComponent("basket")}
        >
          سبد خرید
        </li>
        <li
          className={`cursor-pointer hover:text-monako-5 ${
            showComponent === "changePass" && "text-monako-5"
          }`}
          onClick={() => setShowComponent("changePass")}
        >
          تغییر رمز
        </li>
        <li
          className="cursor-pointer hover:text-monako-5"
          onClick={signOutHandler}
        >
          خروج
        </li>
      </ul>
    </menu>
  );
};

export default ProfileMenu;
