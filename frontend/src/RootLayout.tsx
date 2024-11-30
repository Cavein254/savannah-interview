import { Outlet } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

const RootLayout = () => {
  return (
    <>
      <nav>
        <Header />
      </nav>
      <main className="min-h-[85%]">
        <Outlet />
      </main>
      <footer className="bottom-0">
        <Footer />
      </footer>
    </>
  )
}

export default RootLayout
