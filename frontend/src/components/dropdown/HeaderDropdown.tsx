import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Avator from "../avator/Avator"
import { Link } from "react-router-dom"

const VITE_SERVER_URL = import.meta.env.VITE_SERVER_URL as string

const HeaderDropdown = ({ image }: { image: string | undefined }) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avator image={image} />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>My Albums</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link to={`${VITE_SERVER_URL}/api/logout`}>Logout</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderDropdown
