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
  photos: Photo[]
}

export type UserAlbums = {
  id: string
  name?: string
  username?: string
  email: string
  image?: string
  albums: Array<Album>
}

export type Photo = {
  id: string
  albumId: string
  title: string
  imageUrl: string
}
