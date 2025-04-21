import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export default function Home() {
  const cookieStore = cookies()
  const user = cookieStore.get('user')

  if (user) {
    redirect('/inventory')
  } else {
    redirect('/login')
  }
}
