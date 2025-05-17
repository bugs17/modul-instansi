"use server"

import axios from "axios"
import { revalidatePath } from "next/cache"


export const deleteDpa = async (idDpa) => {

    if (!idDpa) {
        return false
    }

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/delete-dpa/${idDpa}`


    try {
        const response = await axios.get(url, {
            headers:{
                'Content-Type': 'application/json',
                'x-app-key': process.env.NEXT_PUBLIC_AUTH_HEADER_KEY
            }
        })
        if (response.status === 200) {
            revalidatePath('/dashboard/dpa')
            return true
        }
    } catch (error) {
        console.log("Error delete dpa", error.message)
        return false
    }
}