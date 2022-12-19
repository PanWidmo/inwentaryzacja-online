const size = {
  mobile: '600px',
  tablet: '1024px',
};

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    blue: '#1AA7FF',
    darkBlue: '#05204A',
    red: '#FF3939',
    green: '#6DD29B',
    tabGray: '#EAE9E9',
    tabHoverGray: '#F0F0F0',
  },

  //1.5rem = 15px)
  fontSize: {
    xxxl: '4.1rem',
    xxl: '3.4rem',
    xl: '2.4rem',
    l: '1.7rem',
    m: '1.2rem',
    s: '1.1rem',
  },

  breakpoints: {
    mobileOnly: `only screen and (max-width: ${size.mobile})`,
    notMobile: `only screen and (min-width: ${size.mobile})`,
    tabletOnly: `only screen and (min-width: ${size.mobile}) and (max-width: ${size.tablet})`,
    notDesktop: `only screen and (max-width: ${size.tablet})`,
    desktopOnly: `only screen and (min-width: ${size.tablet})`,
  },
};
