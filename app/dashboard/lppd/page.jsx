import ButtonUpload from '@/app/component/button/button-upload'
import ListLppd from '@/app/component/list-lppd'
import ModalUploadLppd from '@/app/component/modal/modal-upload-lppd'
import React from 'react'

const Lppd = () => {
  return (
    <div className="h-full -z-20">
    
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>LPPD</span>
        </div>
        <ButtonUpload idModal={'modal_upload_lppd'} >
          <ModalUploadLppd idModal={'modal_upload_lppd'} />
        </ButtonUpload>
        
        </div>
        <ListLppd />
    </div>
  )
}

export default Lppd