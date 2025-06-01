import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import {
  RouterProvider,
  createRouter,
} from '@tanstack/react-router'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import routeTree from './routing/routeTree.jsx'

const queryClient = new QueryClient()
const router = createRouter({ routeTree })

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <RouterProvider router={router} />
  </QueryClientProvider>
)
