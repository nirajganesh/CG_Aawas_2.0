import Stack from '@mui/material/Stack'
import { Outlet } from 'react-router'
import { AuthTopBar, authTopBarHeight } from './TopBar'

export const AuthLayout = () => {
  return (
    <Stack direction={'row'}>
      {/* side bar */}
      {/* <SideBar /> */}

      {/* content */}
      <Stack spacing={`${authTopBarHeight}px`}>
        {/* top bar */}
        <AuthTopBar />

        {/* children */}
        <Outlet />
      </Stack>
      {/* end of content */}
    </Stack>
  )
}
