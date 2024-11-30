import { User } from "@/types"

interface MDHeaderProps {
  user: User | undefined
}
const MDHeader = ({ user }: MDHeaderProps) => {
  return <div className="hidden md:flex">{user?.name}</div>
}

export default MDHeader
