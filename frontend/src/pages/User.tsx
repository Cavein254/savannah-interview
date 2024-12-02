import BottomNav from "@/components/bottom/BottomNav"
import UserTable from "@/components/table/UserTable"
import { useQueries } from "react-query"
import { getAlbums, getUsers, getUsersAlbums } from "../services/api"
import { ProtectedRoute } from "@/ProtectedRoute"

const UsersPage = () => {
  const results = useQueries([
    { queryKey: "users", queryFn: getUsers },
    { queryKey: "albums", queryFn: getAlbums },
    { queryKey: "usersAlbums", queryFn: getUsersAlbums },
  ])
  const [users, albums, usersAlbums] = results
  if (users.isLoading || albums.isLoading || usersAlbums.isLoading)
    return <div>Loading ...</div>
  if (users.error || albums.error || usersAlbums.error)
    return <div>An error occured...</div>

  return (
    <ProtectedRoute>
      <div className="mt-[20%] md:mt-[7%] lg:mt-[4%]">
        <h4 className="font-bold text-xl">
          Users and number of Albums in the Database
        </h4>
        <div className="flex flex-col gap-2 md:px-4">
          <UserTable />
        </div>
        <BottomNav />
      </div>
    </ProtectedRoute>
  )
}

export default UsersPage
