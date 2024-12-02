import { fetchAlbumById } from "@/services/api"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { QueryClient, QueryClientProvider } from "react-query"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { beforeEach, describe, expect, it, vi } from "vitest"
import AlbumDetails from "./AlbumDetails"

vi.mock("@/services/api", () => ({
  fetchAlbumById: vi.fn(),
}))

const mockAlbumData = {
  id: 1,
  title: "My Awesome Album",
  photos: [
    { id: 10, imageUrl: "photo1.jpg", title: "Photo 1" },
    { id: 11, imageUrl: "photo2.jpg", title: "Photo 2" },
  ],
}

const queryClient = new QueryClient()

const renderWithProviders = (ui: React.ReactNode) => {
  return render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter initialEntries={["/album/1"]}>
        <Routes>
          <Route path="/album/:id" element={ui} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>,
  )
}

describe("AlbumDetails Component", () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it("loads initial state", async () => {
    ;(fetchAlbumById as vi.Mock).mockResolvedValueOnce(mockAlbumData)
    renderWithProviders(<AlbumDetails />)
    expect(screen.getByText("Loading ...")).toBeInTheDocument()
  })

  it("renders album details with title and images", async () => {
    ;(fetchAlbumById as vi.Mock).mockResolvedValueOnce(mockAlbumData)

    renderWithProviders(<AlbumDetails />)

    await waitFor(() => {
      expect(screen.getByText(mockAlbumData.title)).toBeInTheDocument()
    })

    expect(screen.getByRole("img", { name: /Photo 1/i })).toBeInTheDocument()
    expect(screen.getByRole("img", { name: /Photo 2/i })).toBeInTheDocument()
  })

  it("updates the main photo when clicked", async () => {
    ;(fetchAlbumById as vi.Mock).mockResolvedValueOnce(mockAlbumData)

    renderWithProviders(<AlbumDetails />)

    await waitFor(() => {
      expect(screen.getByText(mockAlbumData.title)).toBeInTheDocument()
    })

    const photo1 = screen.getByRole("img", { name: /Photo 1/i })
    await userEvent.click(photo1)

    expect(screen.getByRole("img", { name: /user/i })).toHaveAttribute(
      "src",
      mockAlbumData.photos[0].imageUrl,
    )
  })
})
