import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme-provider.tsx"
import router from "./router"
import { QueryClient, QueryClientProvider } from "react-query"
import UserProvider from "./context/usercontext.tsx"

const queryClient = new QueryClient()

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
)
