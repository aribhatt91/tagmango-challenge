import Brand from "./Brand"
import UserDetails from "./UserDetails"

function NavBar() {
  return (
    <nav className="hidden lg:flex w-full z-10 justify-between items-center py-3.5 px-6 fixed top-0 left-0 bg-surface">
        <Brand/>
        <UserDetails/>
    </nav>
  )
}

export default NavBar