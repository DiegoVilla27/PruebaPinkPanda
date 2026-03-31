import type { RouteObject } from 'react-router-dom'

import PublicRouteGuard from '@/guards/no-auth'
import LoginPage from '@/pages/auth/login-page'
import NotFoundPage from '@/pages/not-found-page'

const publicRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <PublicRouteGuard />,
    children: [
      { index: true, element: <LoginPage /> },
      { path: 'reset-password', element: <NotFoundPage /> },
    ],
  },
]

export default publicRoutes
