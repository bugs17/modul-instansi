import ButtonUpload from '@/app/component/button/button-upload'
import ListDpa from '@/app/component/list-dpa'
import ModalUploadDpa from '@/app/component/modal/modal-upload-dpa'
import React from 'react'

const Dpa = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>DPA</span>
        </div>
        <ButtonUpload idModal={'modal_upload_dpa'} >
          <ModalUploadDpa idModal={'modal_upload_dpa'} />
        </ButtonUpload>
        
        </div>
        <ListDpa />
    </div>
  )
}

export default Dpa