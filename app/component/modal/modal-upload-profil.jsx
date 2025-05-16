"use client"
import { addProfile } from '@/app/actions/add-profil'
import React, { useRef, useState } from 'react'

const ModalUploadProfile = ({idModal}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [file, setFile] = useState(null)
    const refFile = useRef(null)

    const handleSubmit = async () => {
        setIsSubmit(true)
        if (!file || file.type !== 'application/pdf') {
            alert("Pilih file yang sesuai sebelum simpan! 🥱")
            setIsSubmit(false)
            return
        }

        const result = await addProfile(file, 1)
        if (result) {
            alert("File berhasil di upload 👍🏻")
            setIsSubmit(false)
            document.getElementById(idModal).closest()
            setFile(null)
            refFile.current.value = ""
        }
        setIsSubmit(false)
    }


  return (

    <dialog id={idModal} className="modal">
            <div className="modal-box justify-center items-center flex flex-col gap-3">
            <p className="flex flex-col text-center ">
                Upload profil instansi
                <br />
            </p>

            
            <fieldset className="fieldset">
                <legend className="fieldset-legend">Pilih file</legend>
                <input ref={refFile} onChange={(e) => setFile(e.target.files[0])} accept="application/pdf" type="file" className="file-input file-input-success" />
                <label className="label">Foramat file di terima pdf</label>
            </fieldset>


            <div className="modal-action justify-center flex flex-row gap-3">
                {isSubmit ? (
                <span className="loading loading-spinner text-accent"></span>
                ) : (
                <>
                    <button
                    onClick={handleSubmit}
                    className="btn text-slate-100 bg-success  hover:text-slate-100 hover:bg-green-950"
                    >
                    Simpan
                    </button>
                    <form method="dialog">
                    <button
                        className="btn"
                        onClick={() => {
                            refFile.current.value = ""
                        }}
                    >
                        Batal
                    </button>
                    </form>
                </>
                )}
            </div>
            </div>
        </dialog>
  )
}

export default ModalUploadProfile