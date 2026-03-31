import { useNavigate } from 'react-router-dom'

import { logoutSvc } from '@/services/auth.service'
import { useAuthStore } from '@/stores/auth.store'

const usePrivateLayout = () => {
  const navigate = useNavigate()
  const user = useAuthStore((state) => state.user)

  const handleLogout = () => {
    logoutSvc()
    navigate('/auth', { replace: true })
  }

  return {
    user,
    handleLogout,
  }
}

export default usePrivateLayout
