import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Summeries from "../../features/Summeries/Summeries";
import OverviewChart from "../../features/OverviewChart/OverviewChart";
import RecenCard from "../../features/RecenCard/RecenCard";
import { FcGoogle } from "react-icons/fc";
import { FaAmazon } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiNetflix } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa6";

const Dashboard = () => {
  useTitle("Main");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    const controller = new AbortController();
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users", {
          signal: controller.signal,
        });
        if (res.status === 200) {
          const data = await res.json();
          setUsername(data);
        } else {
          setError("There is some problem!!");
        }
        setLoader(false);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchUsers();
    return () => controller.abort();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full max-w-6xl mx-auto shadow-2xl min-h-screen overflow-hidden m-0 dark:bg-gray-600 rounded-xl ">
        {" "}
        <Summeries />
        <div className="w-[90%] mt-15 mb-10 shadow-2xl rounded-xl overflow-hidden mx-auto ">
          {" "}
          <OverviewChart
            Value1={50}
            Value2={80}
            Value3={100}
            Value4={85}
            Value5={20}
            Value6={50}
            Value7={80}
            Value8={100}
            Value9={85}
            Value10={20}
          />
        </div>{" "}
        <h2 className="font-bold text-sky-500 text-2xl mb-5">
          Recent Creations
        </h2>
        <div className="flex gap-5  w-full px-5 mb-10 overflow-x-auto scroll-smooth">
          <RecenCard
            h1Title="Software Engineer"
            pTitle="at Google"
            icon={<FcGoogle className="h-15 min-w-[350px] " />}
          />
          <RecenCard
            h1Title="Product Manager"
            pTitle="at Amazon"
            icon={<FaAmazon className="h-15 min-w-[250px] text-gray-900" />}
          />
          <RecenCard
            h1Title="Data Scientist"
            pTitle="at Meta"
            icon={<FaMeta className="h-15 min-w-[250px] text-sky-600" />}
          />
          <RecenCard
            h1Title="Frontend Developer"
            pTitle="at Netflix"
            icon={<SiNetflix className="h-15 min-w-[250px] text-red-600" />}
          />
          <RecenCard
            h1Title="UX Designer"
            pTitle="at Apple"
            icon={<FaApple className="h-15 min-w-[250px] text-gray-900" />}
          />
          <RecenCard
            h1Title="React Patterns"
            pTitle="at React"
            icon={<FaReact className="h-15 min-w-[250px] text-sky-900" />}
          />
          <RecenCard
            h1Title="Product Designer"
            pTitle="at Figma"
            icon={<FaFigma className="h-15 min-w-[250px] text-rose-600" />}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
