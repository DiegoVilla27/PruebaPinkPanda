import { createBrowserRouter } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

import NotFoundPage from '@/pages/not-found-page'
import privateRoutes from '@/routes/private.routes'
import publicRoutes from '@/routes/public.routes'

const appRouter = createBrowserRouter([
  {
    index: true,
    element: <Navigate to="/dashboard" replace />,
  },
  ...publicRoutes,
  ...privateRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default appRouter
