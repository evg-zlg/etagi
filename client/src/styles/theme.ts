const sizes = {
  xl: 1024,
  lg: 958,
  md: 767,
  sm: 520,
  xs: 320,
};

const baseTheme = {
  colors: {
    primaryText: '#333',
    secondaryText: '#848484',
    lightText: '#fff',
    primaryBg: 'rgb(234, 234, 234)',
    lightBg: '#fff',
    extendBtnBg: '#caddff',
    extendBtnText: '#2a72ee',
    inputBorder: 'rgba(28,28,28,.2)',
    inputHover: 'rgba(28,28,28,.6)',
    inputRoomsBtnHoverBorder: '#2a72ee',
    inputRoomsBtnHovetText: '#2a72ee',
    inputClearBtnBgHover: '#f6f6f6',
    inputShowBtn: '#f15044',
    inputShowBtnHover: '#cf3133',
    thirdText: '#4f4f4f',
    paginationBtnBorder: '#d2d2d2',
    borderBottomHover: '#faa88e',
  },
  shadows: { blockShadow: '0 2px 4px rgba(28,28,28,.08)' },
  brakePoint: {
    xl: `(max-width: ${sizes.xl + 20}px)`,
    lg: `(max-width: ${sizes.lg + 20}px)`,
    md: `(max-width: ${sizes.md + 20}px)`,
    sm: `(max-width: ${sizes.sm + 20}px)`,
    xs: `(max-width: ${sizes.xs + 20}px)`,
  },
  wrapperWidth: {
    xl: `${sizes.xl}px`,
    lg: `${sizes.lg}px`,
    md: `${sizes.md}px`,
    sm: `${sizes.sm}px`,
    xs: `${sizes.xs}px`,
  },
  wrapperMaxWidth: '855px',
  border: {
    radius: '.25rem',
  },
  fontFamily:
    'Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Ubuntu,sans-serif',
};

export { baseTheme };
