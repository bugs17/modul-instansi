import ListLppd from '@/app/component/list-lppd'
import { HardDriveUpload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Lppd = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>LPPD</span>
        </div>
        <Link href={'#'} className="btn btn-dash btn-accent">
            <HardDriveUpload size={18} />
            <span>Upload</span>
        </Link>
        
        </div>
        <ListLppd />
    </div>
  )
}

export default Lppd