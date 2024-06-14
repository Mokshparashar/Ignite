import React from "react";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";

interface ChildComponentProps {
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}
const Signup: React.FC<ChildComponentProps> = ({ setIsLogin }) => {
  return (
    <div>
      <h1 className="text-center text-3xl mt-32">Join Ignite</h1>
      <div className="w-3/4 m-auto flex items-center justify-center flex-col gap-2 mt-16">
        <div className="border-2 rounded-3xl border-red-500 px-6 py-2 flex items-center justify-start  w-full">
          <FcGoogle className="text-2xl text-blue-600 mr-4" />
          <span>Sign up with Google</span>
        </div>
        <div className="border-2 rounded-3xl border-red-500 px-6 py-2 flex items-center justify-start  w-full">
          <MdFacebook className="text-2xl text-blue-600 mr-4" />
          <span>Sign up with Facebook</span>
        </div> 
      </div>
      <div className="text-center mt-12">
        Already have an account?{" "}
        <button
          className="text-red-500 font-semibold"
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
