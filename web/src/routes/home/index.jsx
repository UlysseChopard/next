import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { redirect, Outlet, Link } from "react-router-dom";
import { authStatus } from "../../api/accounts";

export async function loader() {
  const res = await authStatus();
  if (!res.ok) return redirect("/login");
}

export default function Home() {
  const { t } = useTranslation(null, { keyPrefix: "home" });
  const [sidebar, setSidebar] = useState(false);
  return (
    <div id="root">
      <div
        id="app-banner"
        className="h-12 bg-slate-200 flex items-center justify-between"
      >
        <div className="mx-4">
          <button onClick={() => setSidebar(!sidebar)} className="mx-auto">
            {t("sidebar")}
          </button>
        </div>
        <h1 className="text-2xl font-bold">{t("brandname")}</h1>
        <div id="account">
          <Link to="account">{t("account")}</Link>
          <Link to="logout">{t("logout")}</Link>
        </div>
      </div>
      <div
        id="sidebar"
        className={`transition-[width] fixed left-0 h-screen bg-slate-700 text-white flex flex-col p-4 ${
          sidebar ? "visible w-48" : "invisible w-0"
        }`}
      >
        <Link to="experts">{t("experts")}</Link>
        <Link>Lien 2</Link>
        <Link>Lien 3</Link>
      </div>
      <div id="main">
        <Outlet />
      </div>
    </div>
  );
}
