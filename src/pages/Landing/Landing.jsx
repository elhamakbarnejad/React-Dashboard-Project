import { useNavigate } from "react-router";
import TopbarPublic from "../../components/Layouts/PublicLayout/components/TopbarPublic";
import Button from "../../features/Button/Button";
import ContactCard from "./ContactCard";
import AdviceMessageCard from "./AdviceMessageCard";
import { CgEye } from "react-icons/cg";
import { TbClockHour5 } from "react-icons/tb";
import { FaRankingStar } from "react-icons/fa6";
import useTitle from "../../hooks/useTitle";

const Landing = () => {
  useTitle("Landing");

  const navigate = useNavigate();
  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <div className="flex flex-col items-center justify-between">
      <TopbarPublic />
      <div className="space-y-5 mt-50">
        <h1 className="flex flex-col items-center justify-between *:flex *:items-center *:justify-center text-5xl font-Segoe gap-2">
          <div>
            <span className="text-6xl">Prepin</span>
            <svg
              stroke="currentColor"
              fill="url(#starGradient)"
              strokeWidth="0"
              viewBox="0 0 256 256"
              focusable="false"
              aria-hidden="true"
              className="chakra-icon prepin-2eyaeh"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="starGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgb(14, 165, 233)" />
                  <stop offset="100%" stopColor="rgb(20, 184, 166)" />
                </linearGradient>
              </defs>

              <path d="M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.94,166.06,26.5,143a16,16,0,0,1,0-30L89.94,89.94,113,26.5a16,16,0,0,1,30,0l23.07,63.44L229.5,113A15.79,15.79,0,0,1,240,128Z"></path>
            </svg>
            <span className="text-6xl bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
              AI Interview Coach
            </span>
          </div>
          <div>
            <span className="text-6xl">Scales Your Career Services</span>
          </div>
        </h1>{" "}
        <p className="w-[40%] mx-auto  mt-10 text-center">
          AI-powered interview platform for bootcamps, universities, and career
          centers - deliver unlimited practice interviews with emotion tracking,
          readiness scoring, and white-label branding. Your students, our
          infrastructure.
        </p>
        <div className="flex items-center justify-center w-[40%] mx-auto gap-5">
          <Button
            title="Login"
            className="bg-green-500 text-rose-500"
            onclickHandler={loginHandler}
          />
          <Button title="Book a demo" className="bg-black text-white" />
        </div>
        <div className="*:rounded-xl xl:flex-row flex flex-col items-stretch justify-center gap-4  mx-auto w-[70%]">
          <div className="space-y-5 m-5 p-5 xl:w-1/2 w-full bg-white  flex flex-col items-center justify-between shadow relative">
            <ContactCard />
          </div>
          <div className="xl:w-1/2 w-full ">
            <img
              src="/public/images/pic-publick.png"
              alt="pic"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto w-[80%]">
          <AdviceMessageCard
            title="No Visibility into Student Readiness
"
            icon={<CgEye />}
            desc="Students who need help most fly under the radar until they fail real interviews, when it's too late to intervene and save their placement."
          />
          <AdviceMessageCard
            title="Team Burning Out
"
            icon={<TbClockHour5 />}
            desc="Career coaches spend 70% of their time on repetitive mock interviews instead of high-value activities like employer partnerships and strategic coaching.

"
          />
          <AdviceMessageCard
            title="Rankings at Risk
"
            icon={<FaRankingStar />}
            desc="Your ranking depends on graduate placement rates. Poor outcomes drop your U.S. News position, reducing applications and damaging reputation.

"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
