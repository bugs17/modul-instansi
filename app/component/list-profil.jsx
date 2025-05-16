import { Check, Eye, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ListProfil = () => {
  return (
    <div className="h-full overflow-y-scroll pb-10 mt-6 ">
        <table className="table table-xs w-full bg-slate-600">
            <thead>
            <tr>
                <th className="text-left">Status</th>
                <th className="text-center">Tanggal upload</th>
                <th className="text-right">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="text-center">
                        <Check className='text-accent' size={18} />
                </td>
                <td className="text-center">
                <div className="tooltip z-50" data-tip="tanggal upload file">
                    Senin, 17-08-2025
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
            </tbody>
        </table>
    </div>

  )
}

export default ListProfil