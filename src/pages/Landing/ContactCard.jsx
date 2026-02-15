import { LuPhoneCall } from "react-icons/lu";

const ContactCard = () => {
  return (
    <>
      <button className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white py-1 px-4 rounded-2xl md:text-lg text-sm">
        Book Rate 11.7%
      </button>
      <div className="w-15 h-15">
        {" "}
        <img
          src="/public/images/pic-manager.jpg"
          alt="pic"
          className="object-cover  rounded-full"
        />
      </div>

      <h2 className="font-bold">
        Alex Thompson{" "}
        <span className=" text-white bg-green-500 px-2 rounded-md">AI</span>
      </h2>
      <p className="text-gray-500 md:text-lg text-sm sm:text-md">
        Senior Engineering Manager @ Google
      </p>
      <div className="flex-col md:flex-row gap-3 items-center justify-center ">
        <button className=" text-black bg-white px-5 py-2 rounded-2xl border border-gray-200 flex gap-4 items-center justify-center  md:text-lg text-sm mb-5">
          <LuPhoneCall className="text-green-500" /> Technical Interview
        </button>
        <button className=" text-black bg-white  px-5 py-2  rounded-2xl border border-gray-200 flex items-center justify-center  md:text-lg text-sm">
          Challenging
        </button>
      </div>
      <p className="text-gray-500 text-justify px-5 w-[80%] md:text-lg text-sm">
        Practice technical interviews with a Google-style approach. Master
        system design, algorithms, and problem-solving like top tech companies
        expect.
      </p>
      <button className="text-white bg-green-500 rounded-lg px-4 py-2 w-[80%] hover:-translate-y-0.5 transition-all duration-150">
        Try Our AI Interviewer
      </button>
    </>
  );
};

export default ContactCard;
