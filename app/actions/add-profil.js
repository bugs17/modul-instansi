"use server";

const { default: axios } = require("axios");
const { revalidatePath } = require("next/cache");


export const addProfile = async (file, idInstansi) => {
    if (!file || !idInstansi) {
        return false
    }

    const formData = new FormData()
    formData.append("file", file)

    const url = process.env.NEXT_PUBLIC_BACKEND_URL + `/api/admin-opd/add-profil-instansi/${idInstansi}`

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