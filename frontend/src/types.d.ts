export type User = {
  id: string
  name?: string
  username?: string
  email: string
  image?: string
}

export type Album = {
  id: string
  userId: string
  title: string
}

export type UserAlbums = {
  id: string
  name?: string
  username?: string
  email: string
  image?: string
  albums: Array<Album>
}
