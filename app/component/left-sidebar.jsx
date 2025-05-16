"use client"
import React from 'react'
import LeftSideMenu from './left-side-menu'

const LeftSideBar = () => {


  return (
    <div className="flex-grow h-screen pb-20 overflow-y-auto bg-base-100">
        <LeftSideMenu />
        <span className='absolute bottom-2 left-4 select-none opacity-45 text-white font-mono text-[8px]'>Powered By : Kominfo Boven Digoel</span>
    </div>
  )
}

export default LeftSideBar