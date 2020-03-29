# react-use-browser-theme

> React hook for retrieving the current browser theme and listening for changes.

![npm](https://img.shields.io/npm/v/react-use-browser-theme?style=flat-square) ![npm](https://img.shields.io/npm/dt/react-use-browser-theme?style=flat-square)

## Description

This is a React Hook that will call a callback function provided to it every time the theme changes.
The theme of the browser is returned as `light` or `dark`, `light` being the default if there is no explicit theme setting by the user.

## Example

[here](https://emzoumpo.github.io/react-use-browser-theme/)

## Install

```bash
yarn add react-use-browser-theme
```

or

```bash
npm install --save react-use-browser-theme
```

## Usage

```jsx
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
```

## License

MIT © [emzoumpo](https://github.com/emzoumpo)
