import { Stack } from '@mui/material'
import { TopBar, topBarHeight } from './_components/Topbar'
import SignIn from './_components/SignIn'

export const LoginPage = () => {
  return (
    <Stack>
      {/* top bar */}
      <TopBar />

      {/* sign in card */}
      <Stack
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          mt: `${topBarHeight}px`,
          py: '8%',
        }}
      >
        <SignIn />
      </Stack>
    </Stack>
  )
}
