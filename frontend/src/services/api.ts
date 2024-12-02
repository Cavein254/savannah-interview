import axios from "axios"

export const getUsers = async () => {
  const response = await axios.get("/api/users")
  return response.data.data
}

export const getAlbums = async () => {
  const response = await axios.get("/api/albums")
  return response.data.data
}

export const getUsersAlbums = async () => {
  const response = await axios.get("/api/users_albums")
  return response.data.data
}

export const getCurrentUser = async () => {
  const response = await axios.get("/api/user/me")
  return response.data
}

export const fetchAlbumById = async (id: string) => {
  const response = await axios.get(`/api/album/${id}`)
  return response.data.data
}

export const fetchUserById = async (id: string) => {
  const response = await axios.get(`/api/user/${id}`)
  return response.data.data
}

export const getAllPhotos = async () => {
  const response = await axios.get("/api/photos")
  return response.data.data
}

export const fetchPhotoById = async (id: string) => {
  const response = await axios.get(`/api/photo/${id}`)
  return response.data.data
}

export const changePhotoTitle = async (id: string, title: string) => {
  const response = await axios.put(`/api/photo/`, {
    title,
    id,
  })
  return response.data.data
}
