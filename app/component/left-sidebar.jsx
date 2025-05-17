import React from 'react'
import { cookies } from 'next/headers'
import LeftSideMenuInstansiDaerah from './left-side-menu-instansi-daerah'
import LeftSideMenuLembagaTeknis from './left-side-menu-lembaga-teknis'

const LeftSideBar = async () => {

  const cookieStore = await cookies()
  const kategoriInstansi = cookieStore.get('kategoriInstansi')?.value

  return (
    <div className="flex-grow h-screen pb-20 overflow-y-auto bg-base-100">
      {kategoriInstansi === 'dinas daerah' && (
        <LeftSideMenuInstansiDaerah />
      )}
      {kategoriInstansi === 'sekretariat' && (
        <LeftSideMenuInstansiDaerah />
      )}
      {kategoriInstansi === 'lembaga teknis' && (
        <LeftSideMenuLembagaTeknis />
      )}
        <span className='absolute bottom-2 left-4 select-none opacity-45 text-white font-mono text-[8px]'>Powered By : Kominfo Boven Digoel</span>
    </div>
  )
}

export default LeftSideBar