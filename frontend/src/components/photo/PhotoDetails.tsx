import { fetchPhotoById } from "@/services/api"
import { Photo } from "@/types"
import { FaEdit } from "react-icons/fa"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import GoBack from "../common/GoBack"
import { useEffect, useState } from "react"
import PhotoOverlay from "./PhotoOverlay"

const PhotoDetails = () => {
  const [open, setOpen] = useState(false)
  const { id } = useParams()
  const {
    data: photo,
    isLoading,
    error,
  } = useQuery(["photo", id], (): Promise<Photo> => fetchPhotoById(id!), {
    enabled: !!id,
  })

  const handleClose = () => {
    setOpen(false)
  }
  useEffect(() => {}, [])
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  return (
    <>
      {open && <PhotoOverlay handleClose={handleClose} photo={photo} />}
      <div className="mt-[25%]">
        <div className="flex justify-between items-center">
          <GoBack />
          <button
            className="border-2 dark:border-slate-300 p-2 rounded-lg hover:scale-125"
            onClick={() => setOpen(true)}
          >
            <FaEdit size={24} className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-slate-600 dark:text-slate-300">
            {photo?.title}
          </h1>
        </div>
        <img src={photo?.imageUrl} />
        <div>
          <h4>
            Album: <span className="font-bold">{photo?.album?.title}</span>
          </h4>
        </div>
      </div>
    </>
  )
}

export default PhotoDetails
