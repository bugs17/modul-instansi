import axios from 'axios'
import { cookies } from 'next/headers'
import React from 'react'
import ButtonActionRenja from './button/button-action-renja'

const ListRenja = async () => {

    let renja = []
    const cookieStore = await cookies()
    const instansiID = cookieStore.get('instansiID')?.value
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/get-list-renja/${instansiID}`

    try {
        const response = await axios.get(url,{
            headers:{
              'Content-Type': 'application/json',
            },
          })
          if (response.status === 200) {
            renja = response.data.listRenja
          }
    } catch (error) {
        console.log("Error saat melakukan request list renja ke backend")
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
            {renja.length > 0 ? (
                renja.map((item, index) => (

                <tr key={index}>
                    <td className="text-left">
                            <span>{index + 1}</span>
                    </td>
                    <td className="text-center">
                    <div className="tooltip z-50" data-tip="Tahun anggaran RENJA">
                        {item.tahunAnggaran}
                    </div>
                    </td>
                    <td className="text-right p-2">
                        <ButtonActionRenja idItem={item.id} />
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                    <td className="text-left">
                            <span>-</span>
                    </td>
                    <td className="text-center">
                    <div className="tooltip z-50" data-tip="Tahun anggaran RENJA">
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

export default ListRenja