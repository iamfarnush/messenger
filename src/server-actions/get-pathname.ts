'use server'

import { headers } from 'next/headers'

export const getServerPathname = async () => {
  const headersList = await headers()
  const headerUrl = headersList.get('referer')

  if (!headerUrl) return '/'

  const currentPathname = new URL(headerUrl).pathname

  return currentPathname
}