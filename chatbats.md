import { RouterProvider, ScrollRestoration } from "react-router"; import router from "./routes"; const App = () => { return ( <RouterProvider router={router}> <ScrollRestoration /> </RouterProvider> ); }; export default App; import { createBrowserRouter } from "react-router"; import DashboardLayout from "./components/Layout/DashboardLayout"; import Home from "./pages/Home/Home"; import Products from "./pages/Products/Products"; import Users from "./pages/Users/Users"; const router = createBrowserRouter([ { path: "/", element: <DashboardLayout />, children: [ { index: true, element: <Home /> }, { path: "users", element: <Users />, }, { path: "products", element: <Products />, }, ], }, ]); export default router; import { Outlet } from "react-router"; import Sidebar from "../../features/Sidebar/Sidebar"; import Topbar from "../../features/Topbar/Topbar"; const DashboardLayout = () => { return ( <main id="root" className="flex"> <Sidebar /> <section className="grow *:px-6"> <Topbar /> <div className="mt-6 mx-auto"> <div className="relative z-999"> <Outlet /> </div> </div> </section> </main> ); }; export default DashboardLayout; میخوام روت بندیم جوری باشه که اول وارد صفحه ورود کاربران بشم که کلید لاگین داره رو کلید که کلیک کردم فرم لاگین باز بشه بعد یوزر و پس بزنم اگه اومی بود برم صفحه داشبورد که منو داره و میشه رفت به کاربران و محصولات اونجا ساید و تاپ بار و outlet باشه اما توصفحه ورود ساید بار نباشه و تاپ بار هم مخصوص صفحه اول باشه

pages
├── Auth
│ └── Login.jsx
├── Home
├── Users
└── Products

layouts
├── AuthLayout.jsx
└── DashboardLayout.jsx
صفحه ورود اول باز بشه بدون سایدبار.توش دکمه لاگین را بزارم تو تاپش دکمه را زد فرم لاگین باز بشه اوکی بود بره داشبورد
import { Outlet } from "react-router";
import PublicTopbar from "../features/Topbar/PublicTopbar";

const PublicLayout = () => {
return (
<main className="min-h-screen">
<PublicTopbar />
<Outlet />
</main>
);
};

export default PublicLayout;
import { Navigate, Outlet } from "react-router";

const ProtectedRoute = () => {
const isLoggedIn = localStorage.getItem("user");

if (!isLoggedIn) {
return <Navigate to="/" replace />;
}

return <Outlet />;
};

export default ProtectedRoute;

---

import { FaReact } from "react-icons/fa"; const TopMenu = () => { return ( <div className="flex flex-col gap-10 items-center justify-center *:flex *:justify-center *:items-center *:flex-col *:hover:opacity-80 *:transition-all *:duration-150"> <FaReact className="w-12 h-12" /> <button className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center"> <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-white flex items-center justify-center font-bold text-2xl p-2"> + </div> </button> </div> ); }; export default TopMenu; وسط نیست

الان آیتم‌ها وسط نیستند چون کانتینر اصلی عرض مشخصی ندارد و در layout احتمالاً کنار چیزهای دیگر قرار گرفته است.

باید به div اصلی عرض کامل و ارتفاع بدهی تا بتواند وسط‌چین شود.

نسخه درست

<div className="w-full h-full flex flex-col gap-10 items-center justify-center
*:flex *:justify-center *:items-center *:flex-col *:hover:opacity-80 *:transition-all *:duration-150">
  <FaReact className="w-12 h-12" />

  <button className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center">
    <div className="w-10 h-10 border-2 border-gray-400 rounded-full bg-white flex items-center justify-center font-bold text-2xl p-2">
      +
    </div>
  </button>
</div>

---

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis, } from "recharts"; import chartData from "../../data/chart.js"; const OverviewChart = ({ usersNumber, productsNumber }) => { const data = chartData({ usersNumber, productsNumber }); return ( <BarChart style={{ width: "100%", maxWidth: "300px", maxHeight: "70vh", aspectRatio: 1.618, }} responsive data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0, }} > <CartesianGrid strokeDasharray="3 3" /> <XAxis dataKey="title" /> <YAxis /> <Tooltip /> <Legend /> <Bar dataKey="value" barSize={20} fill="#8884d8" /> </BarChart> ); }; export default OverviewChart; import { useEffect, useState } from "react"; import useTitle from "../../hooks/useTitle"; import Summeries from "../../features/Summeries/Summeries"; import OverviewChart from "../../features/OverviewChart/OverviewChart"; import UsersTable from "../../features/UsersTable/UsersTable"; import ProductsTable from "../../features/ProductsTable/ProductsTable"; const Dashboard = () => { useTitle("Main"); const [username, setUsername] = useState(""); const [error, setError] = useState(null); const [loader, setLoader] = useState(false); useEffect(() => { setLoader(true); const controller = new AbortController(); const fetchUsers = async () => { try { const res = await fetch("https://dummyjson.com/users", { signal: controller.signal, }); if (res.status === 200) { const data = await res.json(); // console.log(data); console.log(data.users); setUsername(data); } else { setError("There is some problem!!"); } setLoader(false); } catch (error) { setError(error.message); } }; fetchUsers(); return () => controller.abort(); }, []); console.log(username); return ( <> <div className="flex flex-col items-center justify-between w-full shadow-2xl min-h-screen overflow-hidden m-0 dark:bg-gray-600 rounded-xl"> {" "} <Summeries /> <OverviewChart usersNumber={30} productsNumber={50} /> <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"> <UsersTable /> <ProductsTable /> </div> </div> </> ); }; export default Dashboard;
کد اصلی درست است، فقط چند نکته کوتاه:

در OverviewChart، responsive props اشتباه است. در Recharts باید از <ResponsiveContainer> استفاده کنید، نه prop responsive. مثلاً:

import { ResponsiveContainer } from "recharts";

<ResponsiveContainer width="100%" height={300}>
  <BarChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="title" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Bar dataKey="value" barSize={20} fill="#8884d8" />
  </BarChart>
</ResponsiveContainer>
در Dashboard، setUsername(data) در واقع کل آبجکت را می‌گذارد. اگر می‌خواهید فقط تعداد کاربران برای نمودار، بهتر است:

<OverviewChart usersNumber={username?.users?.length || 0} productsNumber={50} />

کنسول‌ها (console.log) را بعد از تست حذف کنید تا تمیز شود.
عرضش خیلی کمه
نکته کوتاه:

width: "100%" کافیست تا نمودار تمام عرض موجود را بگیرد.

اگر می‌خوای نسبت طلایی (aspectRatio) رعایت شود، می‌توان از padding-top درصدی برای wrapper استفاده کرد.

---

import { useEffect, useState } from "react"; const TablePagination = ({ items, setItems, perPage }) => { const [currentPage, setCurrentPage] = useState(1); const usersArray = items.username.users; const usersArrayLength = items?.username?.users?.length; const itemsNumber = Math.ceil(usersArrayLength / perPage); useEffect(() => { const startIndex = (currentPage - 1) \* itemsNumber; const endIndex = currentPage + itemsNumber; // const paginatedItems = [usersArray].slice(startIndex, endIndex); // setItems(paginatedItems); }, [currentPage, items]); const changeBtnNumber = (btnNumber) => { setCurrentPage(btnNumber); }; const RenderdedPaginationBtns = () => { const btnsArray = []; for (let i = 1; i <= itemsNumber; i++) { btnsArray.push( <button onClick={() => changeBtnNumber(i)} key={i}> {i} </button>, ); } return btnsArray; }; return ( <div> <button>Next</button> {RenderdedPaginationBtns()} <button>Prev</button> </div> ); }; export default TablePagination; import { Link } from "react-router"; import Table from "../../components/commands/Table/Table"; import { MdOpenInNew } from "react-icons/md"; import { tableUsersHeadCells } from "../../data/tableData"; import TableHead from "../../components/commands/Table/Components/TableHead"; import TableHeadCell from "../../components/commands/Table/Components/TableHeadCell"; import TableRow from "../../components/commands/Table/Components/TableRow"; import TableRowCell from "../../components/commands/Table/Components/TableRowCell"; const UsersTable = ({ username, setUsername }) => { const Button = () => { return ( <Link to={"users"} className="w-35 h-10 bg-sky-100 text-gray-900 flex items-center justify-center p-2 rounded-md gap-2 shadow hover:-translate-y-0.5 transition duration-150" > <MdOpenInNew className="text-xl" /> <span className="">Users</span> </Link> ); }; return ( <div> <Table className="w-full" header={{ title: "Products", LinkBtn: Button }} pagination={{ items: { username }, setItems: { setUsername }, perPage: 5, }} > <TableHead> {tableUsersHeadCells.map((item) => { return <TableHeadCell key={item}>{item}</TableHeadCell>; })} </TableHead>{" "} {username?.users?.map((user) => { return ( <TableRow key={user.id}> <TableRowCell>{user.id}</TableRowCell> <TableRowCell>{user.firstName}</TableRowCell> <TableRowCell>{user.lastName}</TableRowCell> <TableRowCell>{user.age}</TableRowCell> <TableRowCell>{user.gender}</TableRowCell> <TableRowCell> <div className="w-5 h-5 flex items-center justify-center"> <img src={user.image} alt="firstName" className="rounded-full object-cover" /> </div> </TableRowCell> <TableRowCell>{user.role}</TableRowCell> </TableRow> ); })} </Table> </div> ); }; export default UsersTable; دیتا را به درستی از https://dummyjson.com/users فچ کردم و جدولم تشکیل شده برای pagination آیتمها را نمیتونم slice کنم

مشکل اصلی در کدی که نوشتی این است که منطق pagination اشتباه محاسبه شده و همچنین ساختار props را هم اشتباه پاس می‌دهی. چند خط مهم را بررسی کنیم.
محاسبه startIndex و endIndex اشتباه است

در این قسمت:

const startIndex = (currentPage - 1) \* itemsNumber;
const endIndex = currentPage + itemsNumber;

اینجا به جای itemsNumber باید از perPage استفاده شود.

فرمول درست:

const startIndex = (currentPage - 1) \* perPage;
const endIndex = startIndex + perPage;

2. slice اشتباه استفاده شده

این خط:

const paginatedItems = [usersArray].slice(startIndex, endIndex);

نباید آرایه را داخل [] بگذاری. این کار باعث می‌شود یک آرایه تو در تو ساخته شود.

درست:

const paginatedItems = usersArray.slice(startIndex, endIndex);

3. setItems را اشتباه پاس داده‌ای

در UsersTable:

pagination={{
  items: { username },
  setItems: { setUsername },
  perPage: 5,
}}

اینجا تو setUsername را داخل آبجکت گذاشتی. باید مستقیم پاس داده شود.

درست:

pagination={{
  items: username,
  setItems: setUsername,
  perPage: 5,
}}

---

import { useEffect, useState } from "react";
import ThemeContext from "./auth";

const ThemeProvider = ({ children }) => {
const [theme, setTheme] = useState("dark");
const changeTheme = () => {
setTheme((prev) => (prev === "dark" ? "light" : "dark"));
};
useEffect(() => {
if (theme === "dark") {
document.documentElement.classList.add("dark");
} else {
document.documentElement.classList.remove("dark");
}
}, [theme]);
return (
<ThemeContext.Provider value={{ theme, changeTheme }}>
{children}
</ThemeContext.Provider>
);
};

export default ThemeProvider;
خیلی خیلی کوتاه و بدون توضیح اضافی بگو کجا کلاس بدهم تا تم عوض شود
@import "tailwindcss";

/_ پیکربندی دارک مود با کلاس _/
@custom-variant dark (&:where(.dark, .dark \*));

---

import { Link } from "react-router";
import Table from "../../components/commands/Table/Table";
import { MdOpenInNew } from "react-icons/md";

const UsersTable = ({ users, setUsers }) => {
const Button = () => {
return (
<Link
to={"users"}
className="w-35 h-10 bg-sky-100 text-gray-900 flex items-center justify-center p-2 rounded-md gap-2 shadow hover:-translate-y-0.5 transition duration-150" >
<MdOpenInNew className="text-xl" />
<span className="">Users</span>
</Link>
);
};
return (
<div>
<Table className="w-full" header={{ title: "Products", LinkBtn: Button }}>
asvasjhas
</Table>
</div>
);
};

export default UsersTable;
import { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import Summeries from "../../features/Summeries/Summeries";
import OverviewChart from "../../features/OverviewChart/OverviewChart";
import UsersTable from "../../features/UsersTable/UsersTable";
import ProductsTable from "../../features/ProductsTable/ProductsTable";

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
console.log(res.status);
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
<div className="flex flex-col items-center justify-between w-full shadow-2xl min-h-screen overflow-hidden m-0 dark:bg-gray-600 rounded-xl">
{" "}
<Summeries />
<div className="w-[25%]">
{" "}
<OverviewChart usersNumber={30} productsNumber={50} />
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full px-5">
<UsersTable users={users} setUsers={setUsers} />
<UsersTable />
</div>
</div>
</>
);
};

export default Dashboard;

خیلی خیلی کوتاه. اصلا توضیح اضافی نده
users را کدوم بخش fect کنم؟
از useEffect داخل Dashboard فچ کن و به UsersTable پاس بده.

بنویس چجوری پاس بدم
javascript
const Dashboard = () => {
useTitle("Main");
const [users, setUsers] = useState([]); // اضافه کن
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
setUsers(data.users); // تغییر بده
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
<div className="flex flex-col items-center justify-between w-full shadow-2xl min-h-screen overflow-hidden m-0 dark:bg-gray-600 rounded-xl">
<Summeries />
<div className="w-[25%]">
<OverviewChart usersNumber={30} productsNumber={50} />
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch w-full px-5">
<UsersTable users={users} setUsers={setUsers} /> {/_ پاس بده _/}
<UsersTable />
</div>
</div>
</>
);
};
