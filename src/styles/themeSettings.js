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
  separator: '#242430',
}

const darkTheme = {
  ...common,
  background: '#363537',
  text: '#FAFAFA',
  highlight: '#FFEF6B',
  separator: '#EEE',
}

export { lightTheme, darkTheme }
