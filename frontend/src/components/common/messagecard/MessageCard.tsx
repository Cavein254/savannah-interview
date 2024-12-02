import { Button } from "@/components/ui/button"
import { FaWheatAwn } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { Message } from "./types"

const MessageCard = ({ message }: { message: Message }) => {
  return (
    <div className="min-h-[90vh] flex justify-center items-center">
      <div className="min-w-[375px] max-w-[450px] shadow-2xl border-2 border-slate-200 p-4">
        <div>
          <Link to="/" className="flex justify-center items-center flex-col">
            <FaWheatAwn size={32} />
            <h4 className="font-bold">Savannah Informatics</h4>
          </Link>
        </div>
        <div className="my-4">
          <p className="text-lg text-center">{message.title}</p>{" "}
        </div>
        <div className="border-b-2 border-gray-400 my-4" />
        <Link
          to={message.link}
          // target={"_blank"}
          className="w-full flex justify-center"
        >
          <Button className="w-full mt-2 bg-slate-200 rounded-lg text-lg font-bold text-black hover:text-white py-8 dark:hover:bg-green-300">
            {message.icon}
            {message.btnMessage}
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default MessageCard
