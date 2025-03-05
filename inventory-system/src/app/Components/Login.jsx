import { User } from "lucide-react";
import React from "react";

function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-tr from-yellow-600 to-black">
      <div className="flex items-center justify-center rounded-xl w-200 shadow-2xl h-110 backdrop-blur-xl">
        <form
          method="POST"
          action="#"
          className="flex flex-col p-4 items-center justify-center bg-gray-50 rounded-s-xl h-110 w-100"
        >
          <div className="items-center justify-center space-y-6 w-70 h-100 p-4 rounded-2xl text-gray-800 bg-whit0 ">
            <div className="flex items-center justify-center mt-6">
              <User
                color="white"
                strokeWidth={1}
                size={100}
                className="bg-black rounded-full p-2"
              />
            </div>
            <input
              type="text"
              placeholder="Username"
              id="Username"
              name="Username"
              required
              className="p-2 rounded-lg text-md text-center border w-full border-gray-800"
            ></input>
            <input
              type="password"
              placeholder="Password"
              name="Password"
              id="Password"
              required
              className="p-2 rounded-lg text-md text-center border w-full border-gray-800"
            ></input>
            <div className="flex items-center justify-center mt-2">
              <button
                type="submit"
                className="bg-amber-300 px-15 py-1 text-gray-800 rounded-lg hover:bg-amber-400 hover:cursor-pointer hover:text-white"
              >
                Login
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex space-x-1.5 items-center justify-center">
                <input
                  type="checkbox"
                  className="bg-gray-200 hover:cursor-pointer"
                ></input>
                <label className="text-xs">Remember Me</label>
              </div>

              <div className="flex items-center justify-center">
                <span className="text-xs hover:text-blue-400 hover:underline hover:cursor-pointer">
                  Forgot Password?
                </span>
              </div>
            </div>
          </div>
        </form>

        <div className="relative flex-col items-center justify-center text-gray-800 rounded-e-xl h-110 w-full">
          <img
            src="/img/gads_logo_transparent.png"
            alt="Golden Arrow Digital Solutions Logo"
            className="h-110 w-full rounded-e-xl"
          />
        </div>
      </div>
    </div>
  );
}
export default Login;
