import { User } from "@/types"
import { FaWheatAwn } from "react-icons/fa6"
import { HiOutlineLockClosed } from "react-icons/hi2"
import { Link, useLocation } from "react-router-dom"
import HeaderDropdown from "../dropdown/HeaderDropdown"
import { ModeToggle } from "../theme/mode-toggle"

import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineLibraryMusic } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"
import SearchItem from "../search/SearchItem"
import { useEffect, useState } from "react"

const VITE_SERVER_LOGIN = import.meta.env.VITE_SERVER_LOGIN as string
interface MDHeaderProps {
  user: User | undefined
}
const MDHeader = ({ user }: MDHeaderProps) => {
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  const [newPath, setnewPath] = useState(path)
  useEffect(() => {
    setnewPath(path)
  }, [path])
  return (
    <div className="fixed flex justify-between w-full items-center px-4 py-4 bg-slate-100 border-b-2 border-b-slate-300 shadow-md dark:bg-slate-800 dark:border-b-slate-700">
      <div>
        <Link to="/users" className="flex gap-2">
          <button className="md:hidden lg:flex">
            <FaWheatAwn size={24} />
          </button>
          <div className="hidden md:flex">
            <h1 className="font-bold uppercase text-green-600 ">
              Savannah{" "}
              <span className="capitalize font-normal text-slate-600 dark:text-slate-200">
                Interview
              </span>
            </h1>
          </div>
        </Link>
      </div>
      <div className="hidden md:flex lg:hidden gap-6">
        <Link to="/users">
          <button
            className={`${newPath === "users" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
          >
            <IoHomeOutline size={24} />
          </button>
        </Link>
        <Link to="/albums">
          <button
            className={`${newPath === "albums" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
          >
            <MdOutlineLibraryMusic size={24} />
          </button>
        </Link>
        <Link to="/photos">
          <button
            className={`${newPath === "photos" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
          >
            <AiOutlinePicture size={24} />
          </button>
        </Link>
      </div>
      <div className="hidden lg:flex justify-between lg:flex-1 px-6">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 uppercase">
            <Link to="/users">
              <h4
                className={`${newPath === "users" ? "text-xl font-bold underline underline-offset-4" : ""} hover:underline hover:cursor-pointer`}
              >
                Home
              </h4>
            </Link>
            <Link to="/albums">
              <h4
                className={`${newPath === "albums" ? "text-xl font-bold underline underline-offset-4" : ""} hover:underline hover:cursor-pointer`}
              >
                Albums
              </h4>
            </Link>
            <Link to="/photos">
              <h4
                className={`${newPath === "photos" ? "text-xl font-bold underline underline-offset-4" : ""} hover:underline hover:cursor-pointer`}
              >
                Photos
              </h4>
            </Link>
          </div>
        </div>
        <div className="">
          <div>
            <SearchItem />
          </div>
        </div>
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

export default MDHeader
