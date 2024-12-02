import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "../ui/card"
import { Photo } from "@/types"

interface PhotoCardProps {
  photo: Photo
}

const PhotoCard = ({ photo }: PhotoCardProps) => {
  return (
    <Link to={`/photo/${photo.id}`}>
      <Card className="hover:shadow-lg hover:shadow-green-200 dark:hover:shadow-green-400">
        <CardContent className="p-0">
          <img src={photo.imageUrl} alt={photo.title} className="" />
        </CardContent>
        <CardFooter>
          <h4 className="capitalize">{photo.title}</h4>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default PhotoCard
