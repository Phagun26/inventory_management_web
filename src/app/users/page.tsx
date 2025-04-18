'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'

interface User {
  id: string
  username: string
  name: string
  designation: string
  mobileNumber: string
  isAdmin: boolean
  organization: {
    name: string
  }
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([])
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const userStr = Cookies.get('user')
    if (!userStr) {
      router.push('/login')
      return
    }

    try {
      const user = JSON.parse(userStr)
      if (!user.isAdmin) {
        router.push('/unauthorized')
        return
      }
      fetchUsers()
    } catch (error) {
      console.error('Error parsing user data:', error)
      Cookies.remove('user')
      router.push('/login')
    }
  }, [router])

  const fetchUsers = async () => {
    try {
      const response = await fetch('/api/users')
      if (response.ok) {
        const data = await response.json()
        setUsers(data)
      } else if (response.status === 401) {
        router.push('/login')
      } else if (response.status === 403) {
        router.push('/unauthorized')
      }
    } catch (error) {
      console.error('Error fetching users:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
  }

  const handleSave = async () => {
    if (!editingUser) return

    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingUser),
      })

      if (response.ok) {
        await fetchUsers()
        setEditingUser(null)
      } else if (response.status === 401) {
        router.push('/login')
      } else if (response.status === 403) {
        router.push('/unauthorized')
      }
    } catch (error) {
      console.error('Error updating user:', error)
    }
  }

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">User Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Username</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Designation</th>
              <th className="py-2 px-4 border-b">Mobile Number</th>
              <th className="py-2 px-4 border-b">Organization</th>
              <th className="py-2 px-4 border-b">Admin</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.username}
                      onChange={(e) => setEditingUser({ ...editingUser, username: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.username
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.name}
                      onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.name
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.designation}
                      onChange={(e) => setEditingUser({ ...editingUser, designation: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.designation
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <input
                      type="text"
                      value={editingUser.mobileNumber}
                      onChange={(e) => setEditingUser({ ...editingUser, mobileNumber: e.target.value })}
                      className="border rounded px-2 py-1"
                    />
                  ) : (
                    user.mobileNumber
                  )}
                </td>
                <td className="py-2 px-4 border-b">{user.organization.name}</td>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <input
                      type="checkbox"
                      checked={editingUser.isAdmin}
                      onChange={(e) => setEditingUser({ ...editingUser, isAdmin: e.target.checked })}
                      className="h-4 w-4"
                    />
                  ) : (
                    <input type="checkbox" checked={user.isAdmin} disabled className="h-4 w-4" />
                  )}
                </td>
                <td className="py-2 px-4 border-b">
                  {editingUser?.id === user.id ? (
                    <button
                      onClick={handleSave}
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => handleEdit(user)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
} 