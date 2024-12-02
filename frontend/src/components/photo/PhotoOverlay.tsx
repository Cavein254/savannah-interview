import { Photo } from "@/types"
import { useEffect, useState } from "react"
import { IoCloseCircleOutline } from "react-icons/io5"
import { Input } from "../ui/input"
import { Loader2 } from "lucide-react"
import { useMutation } from "react-query"
import { changePhotoTitle } from "@/services/api"
import { useToast } from "@/hooks/use-toast"

interface PhotoOverlayProps {
  photo: Photo | undefined
  handleClose: () => void
}

const PhotoOverlay = ({ photo, handleClose }: PhotoOverlayProps) => {
  const [title, setTitle] = useState<string>(photo?.title || "")
  const { toast } = useToast()
  const {
    mutate: updatePhotoTitle,
    isLoading,
    error,
  } = useMutation((newTitleData: { id: string; title: string }) =>
    changePhotoTitle(newTitleData.id, newTitleData.title),
  )

  useEffect(() => {
    setTitle(photo?.title || "")
  }, [photo])

  const handleTitleChange = () => {
    if (photo?.id) {
      updatePhotoTitle({ id: photo.id, title })
    }
    if (error) {
      toast({
        title: "An error occurred!",
        description: JSON.stringify(error),
      })
    }
    toast({
      title: "Success",
      description: `Photo Title changed to ${title}`,
    })
    window.location.reload()
  }
  return (
    <div className="absolute top-0 left-0 z-50 h-[100vh] w-[100vw] bg-slate-100 px-8 pt-4 dark:bg-slate-900">
      <div className="flex justify-end">
        <button className="">
          <IoCloseCircleOutline
            size={32}
            className="text-red-400 hover:text-red-800"
            onClick={() => handleClose()}
          />
        </button>
      </div>
      <div className="mt-4">
        <h4 className="font-bold">Change Picture Title</h4>
        <Input
          value={title}
          className="border-2 mt-2 text-xl font-thin"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <button
          className="dark:bg-slate-700 dark:hover:bg-slate-900 hover:scale-125 px-4 py-2 shadow-md flex gap-2"
          onClick={() => handleTitleChange()}
        >
          {isLoading && <Loader2 className="animate-spin" />}
          Change
        </button>
      </div>
    </div>
  )
}

export default PhotoOverlay
