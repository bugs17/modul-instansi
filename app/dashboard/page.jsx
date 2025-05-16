
import React from 'react'
import ListProfil from '../component/list-profil'
import ButtonUpload from '../component/button/button-upload'
import ModalUploadProfile from '../component/modal/modal-upload-profil'

const Dashboard = () => {


  return (
    <div className="h-full -z-20">
      <div className="mb-4 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-1">
            <span className='font-semibold text-[18px]'>Profil Instansi</span>
        </div>
        <ButtonUpload idModal={'modal_upload_profil'} >
          <ModalUploadProfile idModal={'modal_upload_profil'} />
        </ButtonUpload>
        
      </div>
        <ListProfil />
    </div>
  )
}

export default Dashboard