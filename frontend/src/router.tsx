import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout"
import ErrorPage from "./pages/Error"
import LandingPage from "./pages/Landing"
import UsersPage from "./pages/User"
import AlbumsPage from "./pages/Album"
import PhotosPage from "./pages/Photo"
import HomePage from "./pages/Home"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/dashboard",
        element: <HomePage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/photos",
        element: <PhotosPage />,
      },
    ],
  },
])

export default router