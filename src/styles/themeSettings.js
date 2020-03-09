const screenSizes = {
  large: '768px',
}

const common = {
  isLargeScreen: `(min-width: ${screenSizes.large})`,
}

const lightTheme = {
  ...common,
  background: '#FF7A64',
  text: '#242430',
  highlight: '#FFEF6B',
  highlight2: '#FF8BB5',
  separator: '#242430',
  isLightMode: true,
}

const darkTheme = {
  ...common,
  background: '#363537',
  text: '#FAFAFA',
  highlight: '#FFEF6B',
  highlight2: '#FF8BB5',
  separator: '#EEE',
  isDarkMode: true,
}

export { lightTheme, darkTheme }
