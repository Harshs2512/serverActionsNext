import {cookies} from 'next/headers';
import {SignJWT, jwtVerify} from 'jose'
import { NextRequest, NextResponse } from 'next/server';

const secretKey='Adnan'
const key=new TextEncoder().encode(secretKey)
console.log(key)

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('20 sec from now')
    .sign(key)
  }
  
export async function decrypt(input: string): Promise<any> {
    const {payload} = await jwtVerify(input, key)
    return payload;
  }

export async function getSession() {
      const session = cookies().get('authjs.session-token')?.value;
      if(!session) return false;
      return true
  }