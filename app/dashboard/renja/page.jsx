import ListRenja from '@/app/component/list-renja'
import { HardDriveUpload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Renja = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>RENJA</span>
        </div>
        <Link href={'#'} className="btn btn-dash btn-accent">
            <HardDriveUpload size={18} />
            <span>Upload</span>
        </Link>
        
        </div>
        <ListRenja />
    </div>
  )
}

export default Renja