"use client"
import { logoutAction } from '@/app/actions/handle-logout'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LogoutButton = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)


    const handleLogout = async () => {
        setLoading(true)
        const res = await logoutAction()
        if (res) {
            router.push('/')
        }
        setLoading(false)
    }

  return (
    <li onClick={handleLogout}>
                        
        <a className="flex flex-row justify-between">
            <div className='flex flex-row items-center gap-3'>
                <LogOut size={12} color="white" />
                <span>Keluar</span>
            </div>
            {loading && (
                <span className="loading loading-ring loading-xs"></span>
            )}
        </a>
    </li>
  )
}

export default LogoutButton