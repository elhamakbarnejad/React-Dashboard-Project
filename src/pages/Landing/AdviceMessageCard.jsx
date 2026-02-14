const ContactCard = ({ icon, title, desc }) => {
  return (
    <div className="*:text-center space-y-5 m-5 p-10  bg-gray-50/80  flex flex-col items-center justify-between shadow rounded-lg hover:-translate-y-1 transition-all duration-200 *:flex *:items-center *:justify-center">
      <div className="w-15 h-15 text-2xl font-bold bg-white shadow-2xl text-amber-300 rounded-xl p-4">
        {" "}
        {icon}
      </div>
      <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      <p className="text-sm font-bold text-gray-600">{desc}</p>
    </div>
  );
};

export default ContactCard;
