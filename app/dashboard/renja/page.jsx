import ButtonUpload from '@/app/component/button/button-upload'
import ListRenja from '@/app/component/list-renja'
import ModalUploadRenja from '@/app/component/modal/modal-upload-renja'
import React from 'react'

const Renja = () => {
  return (
    <div className="h-full -z-20">
        <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>RENJA</span>
        </div>
        <ButtonUpload idModal={'modal_upload_renja'} >
          <ModalUploadRenja idModal={'modal_upload_renja'} />
        </ButtonUpload>
        
        </div>
        <ListRenja />

    </div>
  )
}

export default Renja