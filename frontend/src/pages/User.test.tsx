import { render, screen, waitFor } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { useQueries, UseQueryResult } from "react-query"
import UsersPage from "./User"

vi.mock("react-query", () => ({
  useQueries: vi.fn(),
}))

vi.mock("@/components/bottom/BottomNav", () => ({
  default: () => <div data-testid="bottom-nav">Bottom Navigation</div>,
}))
vi.mock("@/components/table/UserTable", () => ({
  default: () => <div data-testid="user-table">User Table</div>,
}))
vi.mock("@/ProtectedRoute", () => ({
  ProtectedRoute: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="protected-route">{children}</div>
  ),
}))

type MockUseQueriesReturn = [
  UseQueryResult<any, unknown>,
  UseQueryResult<any, unknown>,
  UseQueryResult<any, unknown>,
]

describe("UsersPage Component", () => {
  it("renders loading state when queries are loading", () => {
    // @ts-ignore
    useQueries.mockReturnValue([
      { isLoading: true, error: null },
      { isLoading: true, error: null },
      { isLoading: true, error: null },
    ]) as MockUseQueriesReturn

    render(<UsersPage />)
    expect(screen.getByText("Loading ...")).toBeInTheDocument()
  })

  it("renders error state when queries return an error", () => {
    // @ts-ignore
    useQueries.mockReturnValue([
      { isLoading: false, error: new Error("Error fetching users") },
      { isLoading: false, error: null },
      { isLoading: false, error: null },
    ])
    render(<UsersPage />)
    expect(screen.getByText("An error occured...")).toBeInTheDocument()
  })

  it("renders successfully when queries return data", async () => {
    // @ts-ignore
    useQueries.mockReturnValue([
      { isLoading: false, error: null, data: [] },
      { isLoading: false, error: null, data: [] },
      { isLoading: false, error: null, data: [] },
    ])
    render(<UsersPage />)

    await waitFor(() => {
      expect(screen.getByTestId("protected-route")).toBeInTheDocument()
    })
    expect(screen.getByTestId("user-table")).toBeInTheDocument()
    expect(screen.getByTestId("bottom-nav")).toBeInTheDocument()

    expect(
      screen.getByText("Users and number of Albums in the Database"),
    ).toBeInTheDocument()
  })
})
