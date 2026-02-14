import CheckedBackground from "./CheckedBackground";

const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10">
      <div className="relative z-10">{children}</div>
      <CheckedBackground />
    </div>
  );
};

export default PublicLayout;
