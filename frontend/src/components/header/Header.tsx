import { useContext } from "react"
import MDHeader from "./MDHeader"
import SMHeader from "./SMHeader"
import { UserContext } from "@/context/usercontext"

const Header = () => {
  const { user } = useContext(UserContext)
  return (
    <div className="w-full">
      <SMHeader user={user} />
      <MDHeader user={user} />
    </div>
  )
}

export default Header
