"use client"
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [selectedInstansi, setSelectedInstansi] = useState('')
  const [loading, setLoading] = useState(false)
  const [instansis, setInstansis] = useState([])

    const [errorMsg, setErrorMsg] = useState('')
    const instansiSelectRef = useRef(null)

    const router = useRouter()

    useEffect(() => {
        instansiSelectRef.current.value = "pilih instansi"
        const url  = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin-opd/get-all-instansi"
        const getAllInstansi = async () => {
            try {
                const res = await axios.get(url, {
                    headers:{
                        'Content-Type': 'application/json',
                    }
                })
                if (res.status === 200) {
                    setInstansis(res.data.instansis)
                }
            } catch (error) {
                
            }
        }

        getAllInstansi()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!selectedInstansi || !username || !password) {
            alert("Mohon lengkapi semua kolom terlebih dahul sebelum masuk 🥱")
            return
        }
        
        try {
          const url = process.env.NEXT_PUBLIC_BACKEND_URL + "/api/admin-opd/login"
          const data = {
            username,
            password,
            instansiID:selectedInstansi
          }
          const response = await axios.post(url, data, {
            headers:{
              'Content-Type': 'application/json',
            },
            withCredentials: true,
          })
          if (response.status === 200) {
            localStorage.setItem('username', response.data.username);
            localStorage.setItem('password', response.data.password);
            localStorage.setItem('instansiId', response.data.instansiID);
            router.push('/admin-side/home')
          }
        } catch (error) {
          setErrorMsg(error.response.data.message)
          setLoading(false)
        }

    }


  return (
    <main className="justify-center items-center flex flex-1 gap-20 flex-col h-screen w-screen ">
      
      <div className="justify-center items-center flex flex-col gap-2">
        <p className='text-white text-md'>Login admin instansi</p>
        <Image draggable={false} alt="Logo" src="/icon.png" height={150} width={150} />
      </div>
      <div className="hidden md:block">
      <form onSubmit={handleSubmit} className="flex gap-6 flex-col">
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input onChange={(e) => setUsername(e.target.value)} type="text" className="grow" placeholder="Username" />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70">
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder="Password" />
        </label>

        <label className="form-control  w-full max-w-xs">
            <div className="label">
              <span className="label-text">Instansi</span>
            </div>

            <select
              className="select select-md select-bordered"
              defaultValue="pilih kategori"
              onChange={(e) => setSelectedInstansi(e.target.value)}
              ref={instansiSelectRef}
            >
                <option value="pilih instansi" disabled>
                    Pilih Instansi
                </option>
                {instansis.length > 0 && (
                    instansis.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.namaInstansi}
                        </option>
                    ))
                )}
            </select>
        </label>

        {loading ?
        (<span className="loading loading-spinner loading-lg self-center"></span>)
        :
        (<button type="submit" className="btn btn-info">Masuk</button>)}

      </form>
      {errorMsg !== '' && 
      (
        <div className="toast toast-top toast-end">
          <div className="alert alert-error">
            <span>{errorMsg}</span>
            <span onClick={() => setErrorMsg('')} className="cursor-pointer">X</span>

          </div>
        </div>
      )
      }
      </div>

      
    </main>
  );
}
