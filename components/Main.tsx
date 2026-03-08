import Feed from "./Feed"
import ToggleTheme from "./ToggleTheme"

function Main() {
  return (
    <main className="flex mt-34 lg:mt-0 w-full lg:pl-(--sidenav-width) flex-col items-center justify-between sm:items-start">
        <div className="container w-full px-2 py-6 lg:max-w-3xl mx-auto">
            <Feed />
            <ToggleTheme/>
        </div>
    </main>
  )
}

export default Main