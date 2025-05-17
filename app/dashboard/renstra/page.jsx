import ButtonUpload from '@/app/component/button/button-upload'
import ListRenstra from '@/app/component/list-renstra'
import ModalUploadRenstra from '@/app/component/modal/modal-upload-renstra'
import React from 'react'

const Renstra = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>RENSTRA</span>
        </div>
        <ButtonUpload idModal={'modal_upload_renstra'} >
          <ModalUploadRenstra idModal={'modal_upload_renstra'} />
        </ButtonUpload>
        
        </div>
        <ListRenstra />
    </div>
  )
}

export default Renstra