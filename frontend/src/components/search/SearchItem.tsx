import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const SearchItem = () => {
  return (
    <div className="flex items-center">
      <Input placeholder="Search" />
      <button className="-ml-8">
        <Search />
      </button>
    </div>
  )
}

export default SearchItem
