import { Navigate, Outlet } from 'react-router-dom'

import STORAGE from '@/utils/storage'

const PublicRouteGuard = () => {
  const token: string = STORAGE.get('TOKEN')!

  if (token) {
    return <Navigate to="/dashboard" replace />
  }

  return <Outlet />
}

export default PublicRouteGuard
