import { useHeaderTheme, HeaderTheme } from "@/contexts/HeaderThemeContext"
import { useEffect } from "react"

interface UsePageThemeOptions {
  theme: HeaderTheme
  resetOnUnmount?: boolean
  resetTheme?: HeaderTheme
}

export const usePageTheme = ({
  theme,
  resetOnUnmount = true,
  resetTheme = 'light'
}: UsePageThemeOptions) => {
  const { setTheme } = useHeaderTheme()

  useEffect(() => {
    setTheme(theme)
    
    if (resetOnUnmount) {
      return () => setTheme(resetTheme)
    }
  }, [theme, setTheme, resetOnUnmount, resetTheme])
}

export const useDarkThemeForHeader = (resetOnUnmount = true) => {
  return usePageTheme({ theme: 'dark', resetOnUnmount })
}

export const useLightThemeForHeader = (resetOnUnmount = true) => {
  return usePageTheme({ theme: 'light', resetOnUnmount })
}