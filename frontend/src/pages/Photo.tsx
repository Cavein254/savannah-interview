import BottomNav from "@/components/bottom/BottomNav"

import { getAllPhotos } from "@/services/api"
import { Photo } from "@/types"
import { useQuery } from "react-query"
import { lazy, Suspense } from "react"
import GoBack from "@/components/common/GoBack"
const PhotoCard = lazy(() => import("@/components/card/PhotoCard"))

const PhotosPage = () => {
  const { data, isLoading, error } = useQuery("getPhotos", getAllPhotos)
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  const photosList = data.map((photo: Photo) => (
    <Suspense fallback={<div>Loading photos.......</div>} key={photo.id}>
      <PhotoCard photo={photo} />
    </Suspense>
  ))
  return (
    <div className="mt-[25%]">
      <GoBack />
      <h4 className="font-bold text-xl">All Photos</h4>
      <div className="flex flex-col gap-2">{photosList}</div>
      <BottomNav />
    </div>
  )
}

export default PhotosPage
