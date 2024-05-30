"use client";
import Login from "@/app/components/Login";
import Signup from "@/app/components/Signup";
import { Dispatch, SetStateAction, useState } from "react";

function Page() {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  return (
    <div className="w-screen h-screen">
      {isLogin ? <Login setIsLogin={setIsLogin} /> : <Signup setIsLogin={setIsLogin}/>}
    </div>
  );
}

export default Page;
