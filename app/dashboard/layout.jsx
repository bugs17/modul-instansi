import Image from "next/image";
import LogoBoven from "../asset/img/logo-boven.png";
import React from 'react'
import LeftSideBar from "../component/left-sidebar";
import Clock from "../component/clock";
import LogoutButton from "../component/button/logout";
import { cookies } from "next/headers";

const DashboardLayout = async ({children}) => {

  const cookieStore = await cookies()
  const username = cookieStore.get('username')?.value
  const namaInstansi = cookieStore.get('namaInstansi')?.value


  return (
    <div className="h-screen w-full overflow-hidden flex flex-row ">
        <div className="w-[250px] h-screen border-r-[1px] border-r-[#5c59f1] bg-primary">
          <div className="w-full h-[70px]  bg-gradient-to-b from-primary  to-base-100  p-4 flex items-center gap-4">
            <Image draggable={false} alt="logo-boven" src={LogoBoven} height={50} width={50} />
            <span className="font-semibold">INSTANSI</span>
          </div>
          <LeftSideBar />
        </div>

        <div className="flex-1 flex-col flex bg-primary">
          <div className="w-full  h-[70px] flex flex-row justify-between items-center px-10 shadow-sm">
            <div className="flex flex-row items-center gap-4">
                <div className="dropdown dropdown-right">
                <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle avatar"
                >
                    <div className="w-10 rounded-full bg-base-100 overflow-hidden border border-base-100 shadow-sm">
                    <img
                        alt="Tailwind CSS Navbar component"
                        src="/man.png"
                    />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    
                    <LogoutButton />
                </ul>
                </div>
                <span>{username}</span>
            </div>
            <span className="font-mono text-white">{namaInstansi}</span>
            <Clock />
          </div>

          <div className="flex-1 p-8 h-0 overflow-auto bg-[radial-gradient(rgba(229,231,235,0.3)_1px,transparent_1px)] [background-size:16px_16px] ">{children}</div>
        </div>
      </div>
  )
}

export default DashboardLayout