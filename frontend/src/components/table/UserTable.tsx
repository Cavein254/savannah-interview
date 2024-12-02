import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { User } from "@/types"
import { getUsers } from "@/services/api"
import { useQuery } from "react-query"
import { useNavigate } from "react-router-dom"

const UserTable = () => {
  const navigate = useNavigate()
  const { data, isLoading, error } = useQuery("getUsers", getUsers)
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  const handleUserClick = (user: User) => {
    return navigate(`/user/${user.id}`, { replace: false })
  }
  const userInfo = data.map((user: User) => (
    <TableRow key={user.id} onClick={() => handleUserClick(user)}>
      <TableCell className="font-medium">{user.name}</TableCell>
      <TableCell className="font-medium">
        {Array.isArray(user?.albums) ? user.albums.length : 0}
      </TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell className="text-right">{user.username}</TableCell>
    </TableRow>
  ))
  return (
    <Table>
      <TableCaption className="font-bold">
        A List of Users and Albums in the Database
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Albums</TableHead>
          <TableHead>Email</TableHead>
          <TableHead className="text-right">Username</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>{userInfo}</TableBody>
    </Table>
  )
}

export default UserTable
