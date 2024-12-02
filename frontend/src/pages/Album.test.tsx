import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useQuery } from "react-query"
import AlbumsPage from "./Album"
import { Album } from "@/types"

vi.mock("react-query", () => ({
  useQuery: vi.fn(),
}))

vi.mock("@/components/bottom/BottomNav", () => ({
  default: () => <div data-testid="bottom-nav">Bottom Navigation</div>,
}))
vi.mock("@/ProtectedRoute", () => ({
  ProtectedRoute: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="protected-route">{children}</div>
  ),
}))
vi.mock("@/components/card/AlbumCard", () => ({
  default: ({ album }: { album: Album }) => (
    <div data-testid="album-card">{album.id}</div>
  ),
}))

describe("AlbumsPage Component", () => {
  it("renders loading state when query is loading", () => {
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: [],
    })
    render(<AlbumsPage />)
    expect(screen.getByText("Loading ...")).toBeInTheDocument()
  })

  it("renders error state when query returns an error", () => {
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: false,
      error: new Error("Error fetching albums"),
      data: [],
    })
    render(<AlbumsPage />)
    expect(screen.getByText("An error occured...")).toBeInTheDocument()
  })

  it("renders albums when query is successful", async () => {
    const mockAlbums = [
      { id: 1, title: "Album 1" },
      { id: 2, title: "Album 2" },
    ]
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: mockAlbums,
    })

    render(<AlbumsPage />)

    await waitFor(() => {
      expect(screen.getByTestId("protected-route")).toBeInTheDocument()
    })

    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument()

    await waitFor(() => {
      const albumCards = screen.getAllByTestId("album-card")

      expect(albumCards.length).toBe(mockAlbums.length)
      expect(screen.getByText("1")).toBeInTheDocument()
      expect(screen.getByText("2")).toBeInTheDocument()
    })
  })
})
