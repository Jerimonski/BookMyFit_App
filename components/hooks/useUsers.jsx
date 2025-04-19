import axios from "axios"
import { useEffect, useState } from "react"
import { API_URL } from "@env"

export default function useUsers() {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    return axios.get(API_URL).then((response) => setUsers(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { users }
}
