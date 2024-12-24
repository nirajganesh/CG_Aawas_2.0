import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { CustomCaptcha } from '../../../../components/Inputs/CustomCaptcha'
import { CustomOutlinedInput } from '../../../../components/Inputs/InputFields'
import { useSignIn } from '../../../../hooks/onBoarding/signin'

const SignIn = () => {
  const { errors, register, onLogin, setValue } = useSignIn()

  return (
    <Card
      sx={{
        maxWidth: 460,
        width: '100%',
        borderRadius: '8px',
        boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.1)',
        // p: '8px',
      }}
    >
      <CardContent>
        {/* Sign In Header */}
        <Typography
          variant="h4"
          color="text.secondary"
          textAlign="center"
          fontSize={18}
          py={'20px'}
        >
          Sign In
        </Typography>
        {/* end Sign In Header */}

        {/* Form Section */}
        <Stack spacing={'16px'} p={'16px'}>
          {/* Username Field */}
          <CustomOutlinedInput
            fullWidth
            required
            type="text"
            placeholder="Username"
            size="small"
            {...register('username')}
            error={!!errors.username}
            helperText={errors.username?.message}
          />

          {/* Password Field */}
          <CustomOutlinedInput
            fullWidth
            required
            type="password"
            placeholder="Password"
            size="small"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          {/* Remember Me Checkbox */}
          <FormControlLabel
            control={<Checkbox size="small" id="customCheck1" />}
            label="Remember me"
          />

          {/* captcha input */}
          <CustomCaptcha
            limit={4}
            setCaptchaValidated={(valid) => setValue('captchaValidated', valid)}
          />
          {/* <CustomCaptcha /> */}

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            color="info"
            type="submit"
            name="submit"
            sx={{
              bgcolor: '#00808e',
            }}
            onClick={onLogin}
          >
            Log In
          </Button>
        </Stack>
        {/* end Form Section */}
      </CardContent>
    </Card>
  )
}

export default SignIn
