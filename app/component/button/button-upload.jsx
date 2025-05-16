"use client"

import { HardDriveUpload } from 'lucide-react'
import React from 'react'

const ButtonUpload = ({idModal, children}) => {
  return (
    <>
        <button onClick={() => document.getElementById(idModal).showModal()} href={'#'} className="btn btn-dash btn-accent">
            <HardDriveUpload size={18} />
            <span>Upload</span>
        </button>

        {children}
    </>
  )
}

export default ButtonUpload