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