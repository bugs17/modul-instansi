import ButtonUpload from '@/app/component/button/button-upload'
import ListLakip from '@/app/component/list-lakip'
import ModalUploadDpa from '@/app/component/modal/modal-upload-dpa'
import ModalUploadLakip from '@/app/component/modal/modal-upload-lakip'
import { HardDriveUpload } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Lakip = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>LAKIP</span>
        </div>
        <ButtonUpload idModal={'modal_upload_lakip'} >
          <ModalUploadLakip idModal={'modal_upload_lakip'} />
        </ButtonUpload>
        
        </div>
        <ListLakip />
    </div>
  )
}

export default Lakip