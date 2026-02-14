import { useNavigate } from "react-router";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login");

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async () => {
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
    }
    setUsername("");
    setPassword("");
  };

  return (
    <div className="w-full  md:max-w-3xl min-h-130 bg-white shadow rounded flex justify-center flex-col md:flex-row items-stretch z-999">
      <div className="flex flex-col items-center justify-center px-10  md:w-1/2 gap-5  text-center *:flex *:items-center *:justify-between ">
        <FaReact className="w-15 h-15 text-amber-400" />
        <h2>Interactive Demo</h2>
        <p className="text-gray-400 text-sm">
          Experience the full platform power. Choose a role to start your test
          drive.
        </p>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
        className="flex flex-col items-center justify-center px-10 md:w-1/2 md:border-l md:border-gray-200 gap-5 text-center *:flex *:items-center *:justify-between"
      >
        <h2 className="font-bold">Choose your portal</h2>
        <p>Test drive the experience for coaches or students.</p>
        <div className="flex flex-col items-center justify-center w-full ">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border py-2 px-3 mb-3 outline-none shadow border-none bg-white rounded-md"
            autoFocus
            type="text"
            placeholder="Username..."
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border py-2 px-3 mb-3 outline-none shadow border-none bg-white rounded-md"
            type="text"
            placeholder="Password..."
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-amber-400 text-black rounded p-2 mb-3 flex items-center justify-center gap-5 hover:opacity-80 transition-all duration-150"
          >
            Launch Student Demo
            <FaArrowRight />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
