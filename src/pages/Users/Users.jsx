import useTitle from "../../hooks/useTitle";
import UsersTable from "../../features/UsersTable/UsersTable";
import { useEffect, useState } from "react";
import Loader from "../../components/commands/Loader/Loader";

const Users = () => {
  useTitle("Users");
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
  if (loader) {
    return <Loader />;
  }
  return (
    <div>
      {" "}
      <UsersTable username={username} setUsername={setUsername} />
    </div>
  );
};

export default Users;
