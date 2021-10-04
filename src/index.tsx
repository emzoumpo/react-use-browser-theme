import React, { useLayoutEffect } from 'react'

let darkThemeMatch: MediaQueryList

export const useBrowserThemeChangeListener = (
  callback: (e: MediaQueryListEvent) => void
) => {
  useLayoutEffect(() => {
    if (!darkThemeMatch) {
      darkThemeMatch = matchMedia('(prefers-color-scheme: dark)')
      callback({ matches: darkThemeMatch.matches } as MediaQueryListEvent)
    }
    darkThemeMatch.addListener(callback)
    return () => darkThemeMatch.removeListener(callback)
  }, [callback])
}
