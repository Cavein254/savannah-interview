import AlbumCard from "@/components/card/AlbumCard"
import { useQueries } from "react-query"
import { getAlbums, getUsers, getUsersAlbums } from "../services/api"
import { Album } from "../types"
import BottomNav from "@/components/bottom/BottomNav"

const AlbumsPage = () => {
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
      <div className="flex flex-col gap-2">{listalbums}</div>
      <BottomNav />
    </div>
  )
}

export default AlbumsPage
