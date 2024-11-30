import { PropsWithChildren, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { UserContext } from "./context/usercontext"

type ProtectedRouteProps = PropsWithChildren
export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true })
    }
  }, [navigate, user])

  return children
}

export const LoggedUser = ({ children }: ProtectedRouteProps) => {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (user) {
      navigate("/dashboard", { replace: true })
    }
  }, [navigate, user])

  return children
}
