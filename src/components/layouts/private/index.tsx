import { HiOutlineLogout, HiOutlineUser } from 'react-icons/hi'

import usePrivateLayout from '@/components/layouts/private/hooks'
import { Button } from '@/components/ui/button'

interface IProps {
  children: React.ReactNode
}

const PrivateLayout = ({ children }: IProps) => {
  const { user, handleLogout } = usePrivateLayout()

  return (
    <div className="bg-background min-h-screen">
      <header className="border-border bg-card sticky top-0 z-10 border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <h1 className="text-foreground text-lg font-semibold">Mi Aplicación</h1>
          <div className="flex items-center gap-3">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              {user?.image ? (
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <HiOutlineUser className="h-4 w-4" />
              )}
              <span>
                {user?.firstName && user?.lastName
                  ? `${user.firstName} ${user.lastName}`
                  : 'Usuario'}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <HiOutlineLogout className="mr-1 h-4 w-4" />
              Salir
            </Button>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-7xl p-4">{children}</main>
    </div>
  )
}

export default PrivateLayout
