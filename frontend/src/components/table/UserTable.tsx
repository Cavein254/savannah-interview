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
import { Link } from "react-router-dom"

const UserTable = () => {
  const { data, isLoading, error } = useQuery("getUsers", getUsers)
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  const userInfo = data.map((user: User) => (
    <Link to={`/user/${user.id}`}>
      <TableRow key={user.id}>
        <TableCell className="font-medium">{user.name}</TableCell>
        <TableCell className="font-medium text-center">
          {Array.isArray(user?.albums) ? user.albums.length : 0}
        </TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell className="text-right">{user.username}</TableCell>
      </TableRow>
    </Link>
  ))
  return (
    <Table>
      <TableCaption>A list of users and albums in the database</TableCaption>
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
