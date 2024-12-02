import { fetchUserById } from "@/services/api"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import GoBack from "../common/GoBack"
import { ProtectedRoute } from "@/ProtectedRoute"

const UserDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(
    ["fetchUserById", id],
    () => fetchUserById(id!),
    {
      enabled: !!id,
    },
  )
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  return (
    <>
      <ProtectedRoute />
      <div className="mt-[25%] md:mt-[10%]">
        <div className="">
          <GoBack />
          <div className="">
            <h1>User's Details Page {data.name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails
