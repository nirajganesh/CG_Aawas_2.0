import { Avatar, Stack, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import aawasLogo from '../../assets/images/awaas_logo.png'

export const authTopBarHeight = 64

export const AuthTopBar = () => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        bgcolor: 'white',
        height: authTopBarHeight,
        width: '100%',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      {/* wrapper */}
      <Stack
        direction={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        px={2}
      >
        {/* aawas logo */}
        <Avatar
          src={aawasLogo}
          sx={{
            width: 'auto',
            height: '64px',
          }}
          variant="square"
        />

        {/* title */}
        <Typography
          variant="h6"
          fontSize={'18 px'}
          color={'text.secondary'}
          textAlign={'center'}
        >
          GIS Planning for Rural Infrastructure in Housing (GRIH) Portal
        </Typography>

        {/* logout */}
        <Button
          variant="contained"
          sx={{
            bgcolor: '#3f51b5',
            borderRadius: '24px',
            textTransform: 'none',
          }}
        >
          Logout
        </Button>
      </Stack>
      {/* end wrapper */}
    </Stack>
  )
}
