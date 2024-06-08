import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { loginPopup } from "../utils/login.ts";

interface ChildComponentProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const Login: React.FC<ChildComponentProps> = ({ setIsLogin }) => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-32">Welcome back</h1>
      <div className="w-3/4 m-auto flex items-center justify-center flex-col gap-2 mt-16">
        <div
          className="border-2 rounded-3xl border-red-500 px-6 py-2 flex items-center justify-start  w-full"
          onClick={loginPopup}
        >
          <FcGoogle className="text-2xl text-blue-600 mr-4" />
          <span>Login with Google</span>
        </div>

        <div className="border-2 rounded-3xl border-red-500 px-6 py-2 flex items-center justify-start  w-full">
          <MdFacebook className="text-2xl text-blue-600 mr-4" />
          <span>Login with Facebook</span>
        </div>
      </div>
      <div className="text-center mt-12">
        Create account ?{" "}
        <button
          className="text-red-500 font-semibold"
          onClick={() => setIsLogin(false)}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;
