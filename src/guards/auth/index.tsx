import { Navigate, Outlet } from 'react-router-dom'

import STORAGE from '@/utils/storage'

const PrivateRouteGuard = () => {
  const token: string = STORAGE.get('TOKEN')!

  if (!token) {
    return <Navigate to="/auth" replace />
  }

  return <Outlet />
}

export default PrivateRouteGuard
