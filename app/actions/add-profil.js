"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export const addProfile = async (file) => {
    if (!file) {
        return false
    }

    const cookieStore = await cookies()
    const instansiID = cookieStore.get('instansiID')?.value

    const formData = new FormData()
    formData.append("file", file)

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/add-profil-instansi/${instansiID}`

    try {
        const res = await axios.post(url, formData, {
            "Content-Type": "multipart/form-data",
        })
        if (res.status == 201) {
            revalidatePath('/dashboard')
            return true
        }

    } catch (error) {
        console.log("error saat add profile ke backend", error.message)
        return false
    }
}