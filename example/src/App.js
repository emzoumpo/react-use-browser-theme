import React, { useState, useCallback, useLayoutEffect } from 'react'

import { useBrowserThemeChangeListener } from 'react-use-browser-theme'

const App = () => {
  const [theme, setTheme] = useState('light')

  useLayoutEffect(() => {
    if (matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark')
    }
  }, [])

  const browserThemeListener = useCallback(
    (e) => setTheme(e.matches ? 'dark' : 'light'),
    []
  )

  useBrowserThemeChangeListener(browserThemeListener)

  return (
    <div
      style={{
        minHeight: '100vh',
        minWidth: '100vw',
        color: `${theme === 'dark' ? 'white' : 'black'}`,
        backgroundColor: `${theme === 'dark' ? 'black' : 'white'}`,
      }}
    >
      Current browser theme: {theme}
    </div>
  )
}

export default App
