import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./RootLayout"
import ErrorPage from "./pages/Error"
import LandingPage from "./pages/Landing"
import UsersPage from "./pages/User"
import AlbumsPage from "./pages/Album"
import PhotosPage from "./pages/Photo"
import HomePage from "./pages/Home"
import AlbumDetails from "./components/album/AlbumDetails"
import UserDetails from "./components/user/UserDetails"
import PhotoDetails from "./components/photo/PhotoDetails"

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
        path: "/user/:id",
        element: <UserDetails />,
      },
      {
        path: "/albums",
        element: <AlbumsPage />,
      },
      {
        path: "/album/:id",
        element: <AlbumDetails />,
      },
      {
        path: "/photos",
        element: <PhotosPage />,
      },
      {
        path: "/photo/:id",
        element: <PhotoDetails />,
      },
    ],
  },
])

export default router
