'use server';
import { cookies } from 'next/headers';
import jwt, { JwtPayload } from 'jsonwebtoken';

export async function getRole() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token');

  if (!token) {
    return '';
  }

  const decoded = jwt.decode(token.value) as JwtPayload;

  return decoded.role;
}
