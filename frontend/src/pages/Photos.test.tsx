import { render, screen, waitFor } from "@testing-library/react"
import { describe, it, vi } from "vitest"
import { useQuery } from "react-query"
import PhotosPage from "./Photo"
import { expect } from "vitest"
import { Photo } from "@/types"

vi.mock("react-query", () => ({
  useQuery: vi.fn(),
}))

vi.mock("@/components/bottom/BottomNav", () => ({
  default: () => <div data-testid="bottom-nav">Bottom Navigation</div>,
}))
vi.mock("@/components/common/GoBack", () => ({
  default: () => <div data-testid="go-back">Go Back</div>,
}))
vi.mock("@/ProtectedRoute", () => ({
  ProtectedRoute: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="protected-route">{children}</div>
  ),
}))
vi.mock("@/components/card/PhotoCard", () => ({
  default: ({ photo }: { photo: Photo }) => (
    <div data-testid="photo-card">{photo.id}</div>
  ),
}))

describe("PhotosPage Component", () => {
  it("renders loading state when query is loading", () => {
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: true,
      error: null,
      data: [],
    })
    render(<PhotosPage />)
    expect(screen.getByText("Loading ...")).toBeInTheDocument()
  })

  it("renders error state when query returns an error", () => {
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: false,
      error: new Error("Error fetching photos"),
      data: [],
    })
    render(<PhotosPage />)
    expect(screen.getByText("An error occured...")).toBeInTheDocument()
  })

  it("renders photos when query is successful", async () => {
    const mockPhotos = [
      { id: 1, title: "Photo 1" },
      { id: 2, title: "Photo 2" },
    ]
    // @ts-ignore
    useQuery.mockReturnValue({
      isLoading: false,
      error: null,
      data: mockPhotos,
    })

    render(<PhotosPage />)

    await waitFor(() => {
      expect(screen.getByTestId("protected-route")).toBeInTheDocument()
    })

    expect(screen.getByTestId("go-back")).toBeInTheDocument()
    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument()

    await waitFor(() => {
      expect(screen.getByText("1")).toBeInTheDocument()
      expect(screen.getByText("2")).toBeInTheDocument()
    })
  })
})
