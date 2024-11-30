import { getCurrentUser } from "@/services/api"
import { User } from "@/types"
import { ReactNode, createContext, useEffect, useMemo, useState } from "react"
import { useQuery } from "react-query"

interface UserContextProps {
  user?: User
  setUser: (user: User) => void
}

export const UserContext = createContext<UserContextProps>({
  user: undefined,
  setUser: () => {},
})

const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | undefined>(undefined)
  const { data, error } = useQuery("getUser", getCurrentUser)

  useEffect(() => {
    if (data) {
      setUser(data)
    } else if (error) {
      console.log(error)
      setUser(undefined)
    }
  }, [data, error])

  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user, setUser],
  )
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  )
}

export default UserProvider
