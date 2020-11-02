import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import UserService from '../services/user'

export default function useGetUser() {
  const [user, setUser] = useState({})
  const { username = 'davidbehar' } = useParams()
  useEffect(() => {
    UserService.get(username)
      .then((data) => { setUser(data) })
  }, [])
  return [user]
}
