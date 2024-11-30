import { User } from "@/types"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { Link } from "react-router-dom"
import HeaderDropdown from "../dropdown/HeaderDropdown"

const VITE_SERVER_LOGIN = import.meta.env.VITE_SERVER_LOGIN as string

interface SMHeaderProps {
  user: User | undefined
}
const SMHeader = ({ user }: SMHeaderProps) => {
  return (
    <div className="md:hidden flex justify-between">
      <div className="">logo</div>
      <div className="">logo77</div>
      <div className="">
        {user ? (
          <HeaderDropdown image={user.image} />
        ) : (
          <Link to={VITE_SERVER_LOGIN}>
            <button>
              <HiOutlineLockClosed size={24} />
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default SMHeader
