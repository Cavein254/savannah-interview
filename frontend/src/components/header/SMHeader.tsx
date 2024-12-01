import { User } from "@/types"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { Link } from "react-router-dom"
import HeaderDropdown from "../dropdown/HeaderDropdown"
import { FaWheatAwn } from "react-icons/fa6"
import { RxHamburgerMenu } from "react-icons/rx"
import { ModeToggle } from "../theme/mode-toggle"

const VITE_SERVER_LOGIN = import.meta.env.VITE_SERVER_LOGIN as string

interface SMHeaderProps {
  user: User | undefined
}
const SMHeader = ({ user }: SMHeaderProps) => {
  return (
    <div className="md:hidden flex justify-between">
      <div className="">
        <button>
          <RxHamburgerMenu size={24} />
        </button>
      </div>
      <div className="">
        <Link to="/">
          <button>
            <FaWheatAwn size={24} />
          </button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
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
