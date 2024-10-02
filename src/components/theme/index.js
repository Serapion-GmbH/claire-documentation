const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    main: '#e2e8f0',
    background: '#ffffff',
    heading: '#528fc9',
    text: '#4A5568',
    preFormattedText: '#e9eef2',
    link: '#5f8db2',
    hover: '#80b0ee',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    main: '#e2e8f0',
    background: '#001933',
    heading: '#638dc0',
    text: '#D1D5DB',
    preFormattedText: '#2D3748',
    link: '#3669a9',
    hover: '#618dc5',
  },
};

export { lightTheme, darkTheme };
