'use server'

import { signIn, signOut } from "@/../auth";

export async function SignIn() {
    return await signIn()
  }

export async function SignOut() {
    return await signOut()
  }