"use client"
import { addDpa } from '@/app/actions/add-dpa'
import React, { useRef, useState } from 'react'

const ModalUploadDpa = ({idModal}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [file, setFile] = useState(null)
    const [ta, setTa] = useState('')
    const refFile = useRef(null)
    const refTa = useRef(null)

    const handleSubmit = async () => {
        setIsSubmit(true)
        if (!file || file.type !== 'application/pdf', ta === '') {
            alert("Isi semua kolom dengan benar 🥱")
            setIsSubmit(false)
            return
        }

        const result = await addDpa(file, ta)
        if (result) {
            alert("File berhasil di upload 👍🏻")
            setIsSubmit(false)
            document.getElementById(idModal).close()
            setFile(null)
            refFile.current.value = ""
            refTa.current.value = "--pilih tahun anggaran--"

        }
        setIsSubmit(false)
    }

    const years = Array.from({ length: 81 }, (_, i) => 2020 + i)


  return (

    <dialog id={idModal} className="modal">
            <div className="modal-box justify-center items-center flex flex-col gap-3">
            <p className="flex flex-col text-center ">
                Upload file DPA
                <br />
            </p>

            <fieldset className="fieldset w-full  justify-center items-center flex">
                <select ref={refTa} onChange={e => setTa(e.target.value)} defaultValue="--pilih tahun anggaran--" className="select select-success ">
                    <option disabled={true} className='text-slate-500'>--pilih tahun anggaran--</option>
                    {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                    
                </select>
            </fieldset>

            
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
                            refTa.current.value = "--pilih tahun anggaran--"
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

export default ModalUploadDpa