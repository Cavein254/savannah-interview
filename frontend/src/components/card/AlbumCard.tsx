import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Album } from "@/types"
import { Link } from "react-router-dom"

interface AlbumCardProps {
  album: Album
}
const AlbumCard = ({ album }: AlbumCardProps) => {
  return (
    <Link to={`/album/${album.id}`}>
      <Card className="hover:shadow-lg hover:shadow-green-200 dark:hover:shadow-green-400">
        <CardContent className="p-0">
          <img
            src={album.photos?.[0]?.imageUrl || "placeholder.jpg"}
            alt={album.photos?.[0]?.title || "No title"}
            className=""
          />
        </CardContent>
        <CardFooter>
          <h4 className="capitalize">{album.title}</h4>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default AlbumCard
