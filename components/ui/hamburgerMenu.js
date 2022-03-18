const HamburgerMenu = ({ onClick: clickHandler, isExpand }) => {
  return (
    <div
      className="flex flex-col justify-between w-5 h-5 ml-auto cursor-pointer"
      onClick={clickHandler}
    >
      <div
        className={`h-[2px] rounded bg-monako-5 origin-left transition-all ${
          isExpand && "rotate-45  w-[26px]"
        }`}
      ></div>
      <div
        className={`h-[2px] rounded bg-monako-5  transition-all ${
          isExpand && "opacity-0"
        }`}
      ></div>
      <div
        className={`h-[2px] rounded bg-monako-5 origin-left transition-all ${
          isExpand && "-rotate-45 w-[26px]"
        }`}
      ></div>
    </div>
  );
};

export default HamburgerMenu;
