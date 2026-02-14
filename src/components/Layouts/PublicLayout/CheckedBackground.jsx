const CheckedBackground = () => {
  return (
    <div className="min-h-screen w-full bg-white opacity-30 fixed size-full">
      <div
        className="fixed size-full inset-0 z-0 h-screen w-screen bg-amber-50
  bg-[linear-gradient(rgba(0,0,0,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.4)_1px,transparent_1px)]
  bg-[length:38px_38px]"
      />
    </div>
  );
};

export default CheckedBackground;
