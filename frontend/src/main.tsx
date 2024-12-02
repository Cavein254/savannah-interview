import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme-provider.tsx"
import router from "./router"
import { QueryClient, QueryClientProvider } from "react-query"
import UserProvider from "./context/usercontext.tsx"
import { Toaster } from "@/components/ui/toaster"

const queryClient = new QueryClient()

import { datadogLogs } from "@datadog/browser-logs"

datadogLogs.init({
  clientToken: "YOUR_DATADOG_CLIENT_TOKEN",
  site: "datadoghq.com",
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ThemeProvider>
          <RouterProvider router={router} />
          <Toaster />
        </ThemeProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
)
