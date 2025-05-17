"use client"
import { deleteRenja } from '@/app/actions/delete-renja'
import { Eye, Trash2 } from 'lucide-react'
import React from 'react'

const ButtonActionRenja = ({idItem}) => {

    const handleHapus = async () => {
        if (!idItem) {
            alert("Error tidak ada item yg dipilih.")
            return
        }
        const res = confirm(`Apakah anda yakin akan menghapus file ini?`)
        if (res) {
            const result = await deleteRenja(idItem)
            if (!result) {
                alert('Gagal menghapus file. coba lagi!')
                return
            }
        }
    }

  return (
    <>
        <div className="tooltip tooltip-left z-50 inline-block mr-4" data-tip="Lihat">
            <button href={`#`} className='cursor-pointer'>
                <Eye className='text-accent' size={18} />
            </button>
        </div>
        <div className="tooltip tooltip-left z-50 inline-block" data-tip="Hapus">
            <button onClick={handleHapus} className='cursor-pointer' href={`#`}>
                <Trash2 color="red" size={18} />
            </button>
        </div>
    </>
  )
}

export default ButtonActionRenja