import { IoHomeOutline } from "react-icons/io5"
import { MdOutlineLibraryMusic } from "react-icons/md"
import { AiOutlinePicture } from "react-icons/ai"

const BottomNav = () => {
  return (
    <div className="bottom-12 fixed  flex justify-center w-full items-center">
      <div className="dark:bg-slate-800 bg-slate-200 py-4 px-6 rounded-full">
        <div className="flex items-center gap-6">
          <button className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30">
            <IoHomeOutline size={24} />
          </button>
          <button className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30">
            <MdOutlineLibraryMusic size={24} />
          </button>
          <button className="bg-slate-300 p-2 rounded-full hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-black hover:scale-125 transition-transform duration-30">
            <AiOutlinePicture size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BottomNav
