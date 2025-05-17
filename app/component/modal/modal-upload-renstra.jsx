"use client"
import { addRenstra } from '@/app/actions/add-renstra'
import React, { useRef, useState } from 'react'

const ModalUploadRenstra = ({idModal}) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const [file, setFile] = useState(null)
    const [ta1, setTa1] = useState('')
    const [ta2, setTa2] = useState('')
    const refFile = useRef(null)
    const refPeriode1 = useRef(null)
    const refPeriode2 = useRef(null)

    const handleSubmit = async () => {
        setIsSubmit(true)
        if (!file || file.type !== 'application/pdf', ta1 === '' || ta2 === '') {
            alert("Isi semua kolom dengan benar 🥱")
            setIsSubmit(false)
            return
        }

        const taPeriod = `${ta1}-${ta2}`

        const result = await addRenstra(file, taPeriod)
        if (result) {
            alert("File berhasil di upload 👍🏻")
            setIsSubmit(false)
            document.getElementById(idModal).close()
            setFile(null)
            refFile.current.value = ""
            refPeriode1.current.value = "--pilih pilih periode awal--"
            refPeriode2.current.value = "--pilih pilih periode akhir--"

        }
        setIsSubmit(false)
    }

    const years = Array.from({ length: 81 }, (_, i) => 2020 + i)


  return (

    <dialog id={idModal} className="modal">
            <div className="modal-box justify-center items-center flex flex-col gap-3">
            <p className="flex flex-col text-center ">
                Upload file RENSTRA
                <br />
            </p>

            <div className='flex flex-row gap-5'>
                <fieldset className="fieldset w-full  justify-center items-center flex">
                    <select ref={refPeriode1} onChange={e => setTa1(e.target.value)} defaultValue="--pilih pilih periode awal--" className="select select-success ">
                        <option disabled={true} className='text-slate-500'>--pilih pilih periode awal--</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                        
                    </select>
                </fieldset>

                <fieldset className="fieldset w-full  justify-center items-center flex">
                    <select ref={refPeriode2} onChange={e => setTa2(e.target.value)} defaultValue="--pilih pilih periode akhir--" className="select select-success ">
                        <option disabled={true} className='text-slate-500'>--pilih pilih periode akhir--</option>
                        {years.map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                        
                    </select>
                </fieldset>

            </div>

            
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
                            refPeriode1.current.value = "--pilih pilih periode awal--"
                            refPeriode2.current.value = "--pilih pilih periode akhir--"
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

export default ModalUploadRenstra