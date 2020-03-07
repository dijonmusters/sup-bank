import React from 'react'
import { Sun, Moon } from 'react-feather'
import useDarkMode from '../hooks/useDarkMode'
import { Container, Icon, Checkbox, Dot, Toggle } from './Switch.style'

const DarkModeSwitcher = () => {
  const { toggle, theme } = useDarkMode()
  const isDark = theme === 'dark'

  return (
    <Container>
      <Icon isActive={!isDark} onClick={() => isDark && toggle()}>
        <Sun />
      </Icon>
      <Toggle>
        <Checkbox type="checkbox" onChange={toggle} />
        <Dot isDarkMode={isDark} />
      </Toggle>
      <Icon isActive={isDark} onClick={() => !isDark && toggle()}>
        <Moon />
      </Icon>
    </Container>
  )
}

export default DarkModeSwitcher
