import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
interface AvatorProps {
  image?: string
}
const Avator = ({ image }: AvatorProps) => {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback>SI</AvatarFallback>
    </Avatar>
  )
}

export default Avator
