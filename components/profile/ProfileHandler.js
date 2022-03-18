import ProfileMenu from "./ProfileMenu";
import FormChangePassword from "../form/FormChangePassword";
import { useState } from "react";
import Basket from "./Basket";

const ProfileHandler = () => {
  const [showComponent, setShowComponent] = useState("basket");

  return (
    <main className="flex w-screen h-screen">
      <div className="grow ">
        {showComponent === "changePass" && <FormChangePassword />}
        {showComponent === "basket" && <Basket />}
      </div>
      <ProfileMenu
        showComponent={showComponent}
        setShowComponent={setShowComponent}
      />
    </main>
  );
};

export default ProfileHandler;
