"use client";
import { BookCheck,  CalendarCheck, ChartLine,  Goal,  NotepadText, WalletCards } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const LeftSideMenuInstansiDaerah = () => {
  const pathName = usePathname();
  


  const menus = [
    {
      title: "Profil",
      path: "/dashboard",
      match: "/none",
      icon: <BookCheck color="white" size={18} />
    },
    {
      title: "LPPD",
      path: "/dashboard/lppd",
      match: "/lppd",
      icon: <NotepadText color="white" size={18} />
    },
    {
      title: "DPA",
      path: "/dashboard/dpa",
      match: "/dpa",
      icon: <WalletCards color="white" size={18} />
    },
    {
      title: "RENSTRA",
      path: "/dashboard/renstra",
      match: "/renstra",
      icon: <Goal color="white" size={18} />
    },
    {
      title: "LAKIP",
      path: "/dashboard/lakip",
      match: "/lakip",
      icon: <ChartLine color="white" size={18} />
    },
    {
      title: "RENJA",
      path: "/dashboard/renja",
      match: "/renja",
      icon: <CalendarCheck color="white" size={18} />
    },
    
    
  ];

  return (
    <ul className="menu w-full overflow-y-auto">
      {menus.map((menu, index) =>
        menu.submenu ? (
          <li key={index} className="">
            <details>
              <summary
                className={`hover:bg-primary hover:text-slate-100 ${
                  pathName.includes(menu.match) && "bg-primary text-slate-100"
                }`}
              >
                <div className="flex items-center gap-2">
                  {menu.icon} 
                  <span>{menu.title}</span>
                </div>
              </summary>
              <ul>
                {menu.submenu.map((sub, index) => (
                  <li key={index} className="py-1">
                    <Link
                      href={sub.path}
                      className={`hover:bg-primary hover:text-slate-100 ${
                        pathName.includes(sub.match) &&
                        "bg-primary text-slate-100"
                      }`}
                    >
                      {sub.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        ) : (
          <li key={index}>
            <Link
              href={menu.path}
              className={`hover:bg-primary hover:text-slate-100 ${
                pathName.includes(menu.match) && "bg-primary text-slate-100"
              }`}
            >
              <div className="flex items-center gap-2">
                  {menu.icon} 
                  <span>{menu.title}</span>
              </div>
            </Link>
          </li>
        )
      )}
    </ul>
  );
};
{
  /* <li><a>{menu.title}</a></li> */
}
export default LeftSideMenuInstansiDaerah;
