import { fetchAlbumById } from "@/services/api"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import GoBack from "../common/GoBack"
import { Photo } from "@/types"
import { useState } from "react"

const AlbumDetails = () => {
  const [mainPhoto, setMainPhoto] = useState("")
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(
    ["user", id],
    () => fetchAlbumById(id!),
    {
      enabled: !!id,
    },
  )
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>

  const handleSetMainPhoto = (photo: Photo) => {
    setMainPhoto(photo.imageUrl)
  }
  const imageItem = data?.photos?.map((photo: Photo) => (
    <div className="w-[150px]" key={photo.id}>
      <img
        src={photo.imageUrl}
        alt={photo.title}
        className="w-full h-auto object-cover"
        onClick={() => handleSetMainPhoto(photo)}
      />
    </div>
  ))
  return (
    <div className="mt-[25%]">
      <GoBack />
      <div>
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="md:w-[70%] w-full flex flex-col md:flex-row bg-slate-200 shadow-lg dark:bg-slate-800 h-fit">
            <div className="flex md:w-[40%] flex-col gap-4 md:mb-4">
              <img
                src={mainPhoto ? mainPhoto : `${data.photos[0].imageUrl}`}
                alt="user"
                className="w-full h-auto object-cover"
              />
              <div className="flex gap-2">{imageItem}</div>
            </div>
            <div className="flex md:w-[60%] p-2">
              <div className="md:mt-[10%] md:mx-4">
                <div>
                  <h1 className="font-bold text-6xl text-slate-600 dark:text-slate-300 capitalize">
                    {data.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AlbumDetails
