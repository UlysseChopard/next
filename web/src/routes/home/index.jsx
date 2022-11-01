import React, { useState } from "react";
import { redirect, Outlet, useLoaderData, Link } from "react-router-dom";
import { getUser } from "../../api/accounts";

export async function loader() {
  const res = await getUser();
  if (!res.ok) return redirect("/login");
  const user = await res.json();
  return { user };
}

export default function Home() {
  const { user } = useLoaderData();
  const [sidebar, setSidebar] = useState(false);
  return (
    <div id="root">
      <div
        id="app-banner"
        className="h-12 bg-slate-200 flex items-center justify-between"
      >
        <div className="mx-4">
          <button onClick={() => setSidebar(!sidebar)} className="mx-auto">
            Sidebar
          </button>
        </div>
        <h1 className="text-2xl font-bold">E-norm</h1>
        <div id="account">
          <Link to="account">Account</Link>
          <Link to="logout">Logout</Link>
        </div>
      </div>
      <div
        id="sidebar"
        className={`fixed left-0 h-screen bg-slate-700 text-white flex flex-col p-4 ${
          sidebar ? "" : "hidden"
        }`}
      >
        <Link>Lien 1</Link>
        <Link>Lien 2</Link>
        <Link>Lien 3</Link>
      </div>
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}