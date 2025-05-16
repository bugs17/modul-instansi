import axios from 'axios'
import { Check, Eye, Trash2, X } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ListProfil = async () => {

    let profil = null
  const idInstansi = 1
  const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/get-profil-instansi/${idInstansi}`
  
  try {
    
    const response = await axios.get(url,{
      headers:{
        'Content-Type': 'application/json',
      },
      withCredentials:true
    })
    if (response.status === 200) {
      profil = response.data.instansi.profilUrl
    }
  } catch (error) {
    console.log("Error saat request profil instansi", error.message)
  }

  return (
    <div className="h-full overflow-y-scroll pb-10 mt-6 ">
        <table className="table table-xs w-full bg-slate-600">
            <thead>
            <tr>
                <th className="text-left">Status</th>
                <th className="text-right">Action</th>
            </tr>
            </thead>
            <tbody>
            {profil !== null ? (
                <tr>
                <td className="text-center">
                        <Check className='text-accent' size={18} />
                </td>
                <td className="text-center">
                </td>
                <td className="text-right p-2">
                    <div className="tooltip tooltip-left z-50 inline-block mr-4" data-tip="Lihat">
                        <Link href={`#`}>
                            <Eye className='text-accent' size={18} />
                        </Link>
                    </div>
                    <div className="tooltip tooltip-left z-50 inline-block" data-tip="Hapus">
                        <Link href={`#`}>
                            <Trash2 color="red" size={18} />
                        </Link>
                    </div>
                </td>
            </tr>
            ) : (

                <tr>
                    <td className="text-left">
                    <div className='flex flex-row gap-2 items-center'>
                        <X className='text-red-500' size={18} />
                        <span>Belum ada file yg di upload</span>
                    </div>
                    </td>
                    
                    <td className="text-right p-2">
                        -
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </div>

  )
}

export default ListProfil