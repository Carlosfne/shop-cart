const colors = {
  greenTon: "#00C700",
  gray: "#767676",
  ligth_gray: "#8F9391",
  dark_gray: '#52665A',

  pink: "#F56960",
  water_green: "#09BCBA",
  green: "#00C700",
  dark_purple: "#1A1423",
  dark: "#232323",

  white: "#FFFFFF",
  white_secondary: '#FBFFFE',
  transparent: "transparent",
};

export const themeColors = {
  white: colors.white,
  background: colors.white_secondary,
  transparent: colors.transparent,

  button: {
    primary: colors.green,
    secondary: colors.pink,
    white: colors.white,
    text: colors.dark_gray
  },
  bottomTab: {
    background: colors.greenTon,
    backgroundCustomButtom: colors.green,
    activeTintColor: colors.white,
    inactiveTintColor: colors.white,
  },
  cards: {
    primary: colors.pink,
    secondary: colors.greenTon,
    tertiary: colors.green
  },
  typografy: {
    display: {
      primary: colors.dark_purple
    },
    title: {
      primary: colors.greenTon,
      secondary: colors.pink,
      tertiary: colors.dark
    },
    paragraph: {
      primary: colors.gray,
      secondary: colors.ligth_gray,
      tertiary: colors.dark_purple,
      quartenary: colors.green
    },
  },
};

