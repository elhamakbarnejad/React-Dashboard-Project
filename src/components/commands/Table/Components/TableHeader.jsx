const TableHeader = ({ header }) => {
  const { title, LinkBtn } = header;
  return (
    <div className="w-full h-15 bg-gray-100 flex items-center  justify-between text-md  text-gray-900 font-bold px-5">
      <h2 className="font-bold flex items-center justify-between text-md">
        {title}
      </h2>
      <div className=" flex items-center justify-between">{<LinkBtn />}</div>
    </div>
  );
};

export default TableHeader;
