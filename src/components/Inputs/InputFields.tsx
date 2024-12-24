// import { OutlinedInput,OutlinedInputProps } from '@mui/material'
import OutlinedInput, { OutlinedInputProps } from '@mui/material/OutlinedInput'
import { forwardRef } from 'react'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

export interface CustomOutlinedInputProps extends OutlinedInputProps {
  helperText?: string
  success?: boolean
}

/**
 * CustomOutlinedInput
 * @description Custom input field with helper text
 *
 * @param props - all outlined input props with helper text and success
 *
 * @returns custom outlined input field
 *
 * @see https://mui.com/components/text-fields/#outlined-input
 */
export const CustomOutlinedInput = forwardRef<
  HTMLInputElement,
  CustomOutlinedInputProps
>(({ helperText, ...props }, ref) => {
  return (
    <Stack spacing={'8px'} width={props.fullWidth ? '100%' : 'auto'}>
      <OutlinedInput
        fullWidth
        required
        type="text"
        placeholder="Username"
        size="small"
        sx={{
          p: 0,
        }}
        {...props}
        ref={ref}
      />

      {/* helper text */}
      {helperText && (
        <Typography
          variant="caption"
          color={props.success ? 'success.main' : 'error.main'}
        >
          {helperText}
        </Typography>
      )}
    </Stack>
  )
})
