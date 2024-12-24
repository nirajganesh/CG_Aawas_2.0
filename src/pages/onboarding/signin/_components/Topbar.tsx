import { Avatar, Stack, Typography } from '@mui/material'
import aawasLogo from '../../../../assets/images/awaas_logo.png'
import chipsLogo from '../../../../assets/images/chips_logo.jpg'

export const topBarHeight = 70

export const TopBar = () => {
  return (
    <Stack
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        bgcolor: '#0A1835',
        height: topBarHeight,
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
          fontSize={'22px'}
          color={'#f0f8ff'}
          textAlign={'center'}
        >
          GIS Planning for Rural Infrastructure in Housing (GRIH) Portal
        </Typography>

        {/* chips logo */}
        <Avatar
          src={chipsLogo}
          variant="square"
          sx={{
            width: 'auto',
            height: '44px',
          }}
        />
      </Stack>
      {/* end wrapper */}
    </Stack>
  )
}
