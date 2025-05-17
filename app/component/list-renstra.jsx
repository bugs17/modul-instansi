
import React from 'react'
import ButtonActionRenstra from './button/button-action-renstra'
import { cookies } from 'next/headers'
import axios from 'axios'

const ListRenstra = async () => {
    
    let listRenstra = []
    const cookieStore = await cookies()
    const instansiID = cookieStore.get('instansiID')?.value
    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/get-list-renstra/${instansiID}`

    try {
        const response = await axios.get(url,{
            headers:{
              'Content-Type': 'application/json',
            },
          })
          if (response.status === 200) {
            listRenstra = response.data.listRenstra
          }
    } catch (error) {
        console.log("Error saat melakukan request list renstra ke backend")
    }

  return (
    <div className="h-full overflow-y-scroll pb-10 mt-6 ">
        <table className="table table-xs w-full bg-slate-600">
            <thead>
            <tr>
                <th className="text-left">No</th>
                <th className="text-center">Periode</th>
                <th className="text-right">Action</th>
            </tr>
            </thead>
            <tbody>
            {listRenstra.length > 0 ? (
                listRenstra.map((item, index) => (
                    <tr key={index}>
                        <td className="text-left">
                                <span>{index + 1}</span>
                        </td>
                        <td className="text-center">
                        <div className="tooltip z-50" data-tip="Tahun anggaran RENSTRA">
                            {item.periode}
                        </div>
                        </td>
                        <td className="text-right p-2">
                            <ButtonActionRenstra idItem={item.id} />
                        </td>
                    </tr>

                ))
            ) : (
                <tr>
                        <td className="text-left">
                                <span>--</span>
                        </td>
                        <td className="text-center">
                        <div className="tooltip z-50" data-tip="Tahun anggaran RENSTRA">
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

export default ListRenstra