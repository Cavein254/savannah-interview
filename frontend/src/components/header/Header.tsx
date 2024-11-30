import MDHeader from "./MDHeader"
import SMHeader from "./SMHeader"

const Header = () => {
  return (
    <div className="w-full p-4">
      <SMHeader />
      <MDHeader />
    </div>
  )
}

export default Header
