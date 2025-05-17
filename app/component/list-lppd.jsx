import axios from 'axios'
import { Eye, Trash2 } from 'lucide-react'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

const ListLppd = async () => {

    let listLpps = []
    const cookieStore = await cookies()
    const instansiID = cookieStore.get('instansiID')?.value
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/get-list-lppd/${instansiID}`

    try {
        const response = await axios.get(url,{
            headers:{
              'Content-Type': 'application/json',
            },
          })
          if (response.status === 200) {
            listLpps = response.data.listLppd
          }
    } catch (error) {
        console.log("Error saat melakukan request list lppd ke backend")
    }

  return (
    <div className="h-full overflow-y-scroll pb-10 mt-6 ">
        <table className="table table-xs w-full bg-slate-600">
            <thead>
            <tr>
                <th className="text-left">No</th>
                <th className="text-center">Tahun anggaran</th>
                <th className="text-right">Action</th>
            </tr>
            </thead>
            <tbody>
            {listLpps.length > 0 ? (
                listLpps.map((item, index) => (
                    <tr key={index}>
                        <td className="text-left">
                                <span>{index + 1}</span>
                        </td>
                        <td className="text-center">
                        <div className="tooltip z-50" data-tip="Tahun anggaran LPPD">
                            {item.tahunAnggaran}
                        </div>
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

                ))
            ) : (
                <tr>
                        <td className="text-left">
                                <span>--</span>
                        </td>
                        <td className="text-center">
                        <div className="tooltip z-50" data-tip="Tahun anggaran LPPD">
                            --
                        </div>
                        </td>
                        <td className="text-right p-2">
                            --
                        </td>
                    </tr>
            )}
            
            </tbody>
        </table>
    </div>

  )
}

export default ListLppd