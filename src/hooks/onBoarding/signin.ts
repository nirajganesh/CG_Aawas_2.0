import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { MySwal } from '../../utils/helpers'

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/

const SiginInForm = z.object({
  username: z
    .string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters'),
  password: z
    .string()
    .regex(
      passRegex,
      'Password must contain at least 1 uppercase, 1 lowercase, and 1 number'
    ),
  captchaValidated: z.boolean(),
})

export type SignInFormType = z.infer<typeof SiginInForm>

export const useSignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
    setValue,
    getValues,
  } = useForm<SignInFormType>({
    resolver: zodResolver(SiginInForm),
  })

  // Handle login
  const onLogin = useCallback(() => {
    handleSubmit(
      (data) => {
        console.log(data)
        if (!data.captchaValidated) {
          MySwal.fire({
            title: 'Captcha Validation',
            text: 'Please validate the captcha',
            icon: 'error',
          })
          return
        }

        // Call login API
        MySwal.fire({
          title: 'Logging In',
          text: 'Please wait...',
          icon: 'info',
          showConfirmButton: false,
          allowOutsideClick: false,
        })
        window.location.href = '/dashboard'
      },
      (err) => {
        console.log(err, getValues())
        MySwal.fire({
          title: 'Invalid Input',
          text: 'Please check the input fields',
          icon: 'error',
        })
      }
    )()
  }, [getValues, handleSubmit])

  return {
    register,
    errors,
    onLogin,
    reset,
    control,
    setValue,
    getValues,
  }
}
