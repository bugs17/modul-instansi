"use server"

import axios from "axios"
import { cookies } from "next/headers"


// Fungsi untuk set cookie
async function setAuthCookie(username, password, instansiID, namaInstansi, kategoriInstansi) {
    const cookieStore = await cookies()
    cookieStore.set('status', 'authenticated', {
      httpOnly: true,
      path: '/',
      maxAge: 60 * 60 * 24, // 1 hari
    })

    cookieStore.set('username', username)
    cookieStore.set('password', password)
    cookieStore.set('instansiID', instansiID)
    cookieStore.set('namaInstansi', namaInstansi)
    cookieStore.set('kategoriInstansi', kategoriInstansi)
  }


export const login = async (username, password, instansiID) => {
    try {
        const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin-opd/login"
        const data = {
            username,
            password,
            instansiID
          }
    
          const response = await axios.post(url, data, {
            headers:{
              'Content-Type': 'application/json',
              'x-app-key': process.env.NEXT_PUBLIC_AUTH_HEADER_KEY
            },
          })
    
          if (response.status === 200) {
            await setAuthCookie(response.data.username,response.data.password, response.data.instansiID, response.data.namaInstansi, response.data.kategoriInstansi)
            return {
                ...response.data,
                'statusResponse': true
            }
          }
    } catch (error) {
        console.log("Terjadi error proses login ke backend", error.message)
        return {'statusResponse':false}
    }
}