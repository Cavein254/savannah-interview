import BottomNav from "@/components/bottom/BottomNav"
import { useQuery } from "react-query"
import { getAlbums } from "../services/api"
import { Album } from "../types"
import { lazy, Suspense } from "react"
import { ProtectedRoute } from "@/ProtectedRoute"

const AlbumCard = lazy(() => import("@/components/card/AlbumCard"))

const AlbumsPage = () => {
  const { data: albums, isLoading, error } = useQuery("getAlbum", getAlbums)
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  const listalbums = albums.map((album: Album) => (
    <Suspense key={album.id} fallback={<div>Loading photo...</div>}>
      <AlbumCard album={album} />
    </Suspense>
  ))
  return (
    <ProtectedRoute>
      <div className="mt-[20%] md:mt-[7%] lg:mt-[4%]">
        <h4 className="font-bold text-xl">All Albums</h4>
        <div className="flex flex-col gap-2 md:flex-row md:flex-wrap justify-center">
          {listalbums}
        </div>
        <BottomNav />
      </div>
    </ProtectedRoute>
  )
}

export default AlbumsPage
