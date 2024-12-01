import AlbumCard from "@/components/card/AlbumCard"
import { useQueries } from "react-query"
import { getAlbums, getUsers, getUsersAlbums } from "../services/api"
import { Album } from "../types"

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
  const listalbums = albums.data.map((album: Album) => (
    <AlbumCard key={album.id} album={album} />
  ))
  return (
    <div className="mt-[25%]">
      {/* <h1>Users</h1>
      <ul>
        {users.data.map((user: User) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <h1>Albums</h1>
      <ul>
        {albums.data.map((album) => (
          <li key={album.id}>{album.title}</li>
        ))}
      </ul>

      <h1>Users' Albums</h1>
      <ul>
        {usersAlbums.data.map((userAlbum) => (
          <li key={userAlbum.id}>
            {userAlbum.title} - {userAlbum.username}
          </li>
        ))}
      </ul> */}

      <div className="flex flex-col gap-2">{listalbums}</div>
    </div>
  )
}

export default UsersPage
