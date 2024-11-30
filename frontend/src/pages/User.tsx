import { useQuery } from "react-query"
import { getUsers } from "../services/getUsers"

const UsersPage = () => {
  const { data: users = [], error, isLoading } = useQuery("userData", getUsers)
  if (isLoading) return <div>Fetch users ...</div>
  if (error) return <div>An error occured...</div>

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default UsersPage
