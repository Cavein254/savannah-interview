import { FcGoogle } from "react-icons/fc"
import { LoggedUser } from "@/ProtectedRoute"
import MessageCard from "@/components/common/messagecard/MessageCard"

const VITE_SERVER_LOGIN = import.meta.env.VITE_SERVER_LOGIN as string

const Login = () => {
  const message = {
    title: "Welcome Savannah Interview App",
    btnMessage: "Continue with Google",
    icon: <FcGoogle size={24} className="mr-2" />,
    link: VITE_SERVER_LOGIN,
  }
  return (
    <>
      {<LoggedUser />}
      <MessageCard message={message} />
    </>
  )
}

export default Login
