import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineLibraryMusic } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
const BottomNav = () => {
  const navigate = useNavigate()
  const url = window.location.href
  const path = url.split("/")[3]
  const handleNavChange = (path: string) => {
    return navigate(`/${path}`, { replace: false })
  }
  return (
    <nav className="md:hidden bottom-12 fixed  flex justify-center w-full items-center opacity-75 hover:opacity-100">
      <div className="dark:bg-slate-800 bg-slate-200 py-4 px-6 rounded-full">
        <div className="flex items-center gap-6">
          <button
            className={`${path === "users" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
            onClick={() => handleNavChange("users")}
          >
            <IoHomeOutline size={24} />
          </button>
          <button
            className={`${path === "albums" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
            onClick={() => handleNavChange("albums")}
          >
            <MdOutlineLibraryMusic size={24} />
          </button>
          <button
            className={`${path === "photos" ? "scale-125" : ""} bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30}`}
            onClick={() => handleNavChange("photos")}
          >
            <AiOutlinePicture size={24} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default BottomNav
