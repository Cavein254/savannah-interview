import { User } from "@/types"
import { FaWheatAwn } from "react-icons/fa6"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { RxHamburgerMenu } from "react-icons/rx"
import { Link } from "react-router-dom"
import HeaderDropdown from "../dropdown/HeaderDropdown"
import { ModeToggle } from "../theme/mode-toggle"

const VITE_SERVER_LOGIN = import.meta.env.VITE_SERVER_LOGIN as string

interface SMHeaderProps {
  user: User | undefined
}
const SMHeader = ({ user }: SMHeaderProps) => {
  return (
    <div className="fixed md:hidden flex justify-between w-full items-center px-4 py-4 bg-slate-100 border-b-2 border-b-slate-300 shadow-md dark:bg-slate-800 dark:border-b-slate-700">
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
