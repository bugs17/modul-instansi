import { HardDriveUpload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import ListProfil from '../component/list-profil'

const Dashboard = () => {
  return (
    <div className="h-full -z-20">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>Profil Instansi</span>
        </div>
        <Link href={'#'} className="btn btn-dash btn-accent">
            <HardDriveUpload size={18} />
            <span>Upload</span>
        </Link>
        
      </div>
        <ListProfil />
    </div>
  )
}

export default Dashboard