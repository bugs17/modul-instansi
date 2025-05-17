"use server"

import { cookies } from "next/headers"
import { NextResponse } from "next/server"


export async function logoutAction() {
    const cookieStore = await cookies()
    cookieStore.set('status', '', {
      httpOnly: true,
      path: '/',
      maxAge: new Date(0), // 1 hari
    })
    cookieStore.set('username', '')
    cookieStore.set('password', '')
    cookieStore.set('instansiID', '')
    cookieStore.set('namaInstansi', '')
    return true
  }