import SummeryCard from "./components/SummeryCard";
const Summeries = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 w-full shadow p-8">
      <SummeryCard
        h1Title="AI Mock Interview"
        pTitle="Create interviews with your CV and job descriptions"
        btn1Title="Custom Interview"
        btn2Title="Choose Template"
      />
      <SummeryCard
        h1Title="Quick Actions"
        pTitle="Get started by uploading your documents or tracking applications"
        btn1Title="Upload Resume"
        btn2Title="Add Job"
      />
      <SummeryCard
        h1Title="Revolut Interviews"
        pTitle="Company-specific problem solving cases."
        btn1Title="View"
        btn2Title="Creations"
      />
    </div>
  );
};

export default Summeries;
