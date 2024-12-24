import CachedIcon from '@mui/icons-material/Cached'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import React, { useCallback, useEffect, useRef } from 'react'
import { CustomOutlinedInput } from './InputFields'
import Typography from '@mui/material/Typography'

export const CaptchaCanvas = ({
  limit = 4,
  refreshTxt,
  setcaptchatext,
}: {
  limit?: number
  refreshTxt?: string
  setcaptchatext: (text: string) => void
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Generate random character
  const generateRandomChar = useCallback(
    (min: number, max: number): string =>
      String.fromCharCode(Math.floor(Math.random() * (max - min + 1) + min)),
    []
  )

  // Generate captcha text with random characters
  const generateCaptchaText = useCallback(() => {
    let captcha = ''
    for (let i = 0; i < 3; i++) {
      captcha += generateRandomChar(65, 90) // Uppercase letters
      captcha += generateRandomChar(97, 122) // Lowercase letters
      captcha += generateRandomChar(48, 57) // Numbers
    }
    return captcha
      .split('')
      .sort(() => Math.random() - 0.5)
      .join('')
      .slice(0, limit)
  }, [generateRandomChar, limit])

  // Draw the captcha text on the canvas
  const drawCaptchaOnCanvas = (
    ctx: CanvasRenderingContext2D,
    captcha: string
  ) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    const textColors = ['rgb(0,0,0)', 'rgb(130,130,130)']
    const letterSpace = 150 / captcha.length

    for (let i = 0; i < captcha.length; i++) {
      const xInitialSpace = 25
      ctx.font = '20px Roboto Mono'
      ctx.fillStyle = textColors[Math.floor(Math.random() * textColors.length)]
      ctx.fillText(
        captcha[i],
        xInitialSpace + i * letterSpace,
        Math.floor(Math.random() * 16 + 25)
      )
      // add some random noise
      for (let j = 0; j < 10; j++) {
        ctx.fillStyle =
          textColors[Math.floor(Math.random() * textColors.length)]
        ctx.fillRect(
          Math.random() * 200,
          Math.random() * 50,
          Math.random() * 2,
          Math.random() * 2
        )
      }
      // add some random lines
      for (let j = 0; j < 2; j++) {
        ctx.strokeStyle =
          textColors[Math.floor(Math.random() * textColors.length)]
        ctx.beginPath()
        ctx.moveTo(Math.random() * 200, Math.random() * 50)
        ctx.lineTo(Math.random() * 200, Math.random() * 50)
        ctx.stroke()
      }
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas && refreshTxt) {
      const ctx = canvas.getContext('2d')
      if (ctx) {
        const newCaptchaText = generateCaptchaText()
        setcaptchatext(newCaptchaText)
        drawCaptchaOnCanvas(ctx, newCaptchaText)
      }
    }
  }, [generateCaptchaText, refreshTxt, setcaptchatext])

  return <canvas ref={canvasRef} width={200} height={50} />
}

/**
 * CustomCaptcha
 * @description Captcha canvas and input field to verify human input
 *
 * @param props - all outlined input props
 *
 * @returns captcha input field
 */
export const CustomCaptcha = ({
  limit = 4,
  setCaptchaValidated,
}: {
  limit?: number
  setCaptchaValidated: (value: boolean) => void
}) => {
  const [refreshTxt, setRefreshTxt] = React.useState(Math.random().toString())
  const [captchaText, setCaptchaText] = React.useState('')
  const [userInput, setUserInput] = React.useState('')

  // set captcha validation
  useEffect(() => {
    if (userInput.length === limit) {
      setCaptchaValidated(userInput === captchaText)
    } else {
      setCaptchaValidated(false)
    }
  }, [userInput, limit, captchaText, setCaptchaValidated])

  return (
    <Stack spacing={'8px'}>
      {/* Captcha Canvas */}
      <Stack>
        <CaptchaCanvas
          refreshTxt={refreshTxt}
          limit={limit}
          setcaptchatext={setCaptchaText}
        />
      </Stack>

      {/* input and refresh button */}
      <Stack
        direction="row"
        width={'100%'}
        alignItems={'center'}
        spacing={'8px'}
      >
        {/* Captcha Input */}
        <CustomOutlinedInput
          fullWidth
          required
          type="text"
          placeholder="Captcha"
          size="small"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          helperText={undefined}
          sx={{
            width: '100%',
          }}
        />

        {/* Refresh Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => setRefreshTxt(Math.random().toString())}
          endIcon={<CachedIcon />}
          sx={{
            width: '45%',
          }}
        >
          Refresh
        </Button>
      </Stack>
      {/* end input and refresh button */}

      <Typography variant="caption" color={'error.main'}>
        {userInput.length !== limit
          ? 'Captcha must be 4 characters'
          : userInput !== captchaText
          ? 'Captcha does not match'
          : ''}
      </Typography>
    </Stack>
  )
}
