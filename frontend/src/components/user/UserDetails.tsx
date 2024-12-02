import { fetchUserById } from "@/services/api"
import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import GoBack from "../common/GoBack"

const UserDetails = () => {
  const { id } = useParams()
  const { data, isLoading, error } = useQuery(
    ["UserDetails", id],
    () => fetchUserById(id!),
    {
      enabled: !!id,
    },
  )
  if (isLoading) return <div>Loading ...</div>
  if (error) return <div>An error occured...</div>
  console.log(data)
  return (
    <div className="mt-[15%]">
      <div className="">
        <GoBack />
      </div>
    </div>
  )
}

export default UserDetails
