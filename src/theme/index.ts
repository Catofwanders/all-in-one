import { createTheme, responsiveFontSizes } from '@mui/material';
import { WARNING_CONTRAST_TEXT_COLOR } from './constants';

interface IType {
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

const typographyList: IType = {
  default: {
    fontFamily: ['Jost', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 32,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h2: {
      fontSize: 28,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h3: {
      fontSize: 24,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h4: {
      fontSize: 21,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h5: {
      fontSize: 18,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h6: {
      fontSize: 16,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12,
      fontWeight: 400,
    },
    caption: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
  large: {
    h1: {
      fontSize: 32 + 2,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h2: {
      fontSize: 28 + 2,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h3: {
      fontSize: 24 + 2,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h4: {
      fontSize: 21 + 2,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h5: {
      fontSize: 18 + 2,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h6: {
      fontSize: 16 + 2,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    body1: {
      fontSize: 16 + 2,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12 + 2,
      fontWeight: 400,
    },
    caption: {
      fontSize: 14 + 2,
      fontWeight: 400,
    },
  },
  extralarge: {
    fontFamily: ['Jost', 'Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 32 + 4,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h2: {
      fontSize: 28 + 4,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h3: {
      fontSize: 24 + 4,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h4: {
      fontSize: 21 + 4,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h5: {
      fontSize: 18 + 4,
      fontWeight: 600,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    h6: {
      fontSize: 16 + 4,
      fontWeight: 500,
      color: WARNING_CONTRAST_TEXT_COLOR,
    },
    body1: {
      fontSize: 16 + 4,
      fontWeight: 400,
    },
    body2: {
      fontSize: 12 + 4,
      fontWeight: 400,
    },
    caption: {
      fontSize: 14 + 4,
      fontWeight: 400,
    },
  },
};

const paletteList: IType = {
  default: {
    text: {
      primary: '#717177',
      secondary: '#FFFFFF',
      disabled: '#C4C4D0',
    },
    primary: {
      main: '#A60011',
      dark: '#97000F',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#3656C1',
      dark: '#314EB0',
      contrastText: '#FFF',
    },
    info: {
      light: '#4C4D5A',
      main: '#4C4C5A',
      dark: '#454552',
      contrastText: '#FFF',
    },
    success: {
      main: '#16865B',
      dark: '#147A53',
      contrastText: '#FFF',
    },
    warning: {
      main: '#FFB50D',
      dark: '#FFB50D',
      contrastText: WARNING_CONTRAST_TEXT_COLOR,
    },
    error: {
      main: '#EA5D4B',
      dark: '#D55544',
      contrastText: '#212121',
    },
    grey: {
      A100: '#F7F7F7',
      A200: '#EFEFF0',
      A700: '#C4C4CF',
      A400: '#B2B2BD',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
  achromatopsia: {
    text: {
      primary: '#717177',
      secondary: '#FFFFFF',
      disabled: '#C4C4D0',
    },
    primary: {
      main: '#252525',
      dark: '#97000F',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#575757',
      dark: '#314EB0',
      contrastText: '#FFF',
    },
    info: {
      light: '#4C4D5A',
      main: '#4D4D4D',
      dark: '#454552',
      contrastText: '#FFF',
    },
    success: {
      main: '#6B6B6B',
      dark: '#147A53',
      contrastText: '#FFF',
    },
    warning: {
      main: '#B9B9B9',
      dark: '#B9B9B9',
      contrastText: WARNING_CONTRAST_TEXT_COLOR,
    },
    error: {
      main: '#7A7A7A',
      dark: '#D55544',
      contrastText: '#212121',
    },
    grey: {
      A100: '#F7F7F7',
      A200: '#EFEFF0',
      A700: '#C4C4CF',
      A400: '#B2B2BD',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
  tritanopia: {
    text: {
      primary: '#717177',
      secondary: '#FFFFFF',
      disabled: '#C4C4D0',
    },
    primary: {
      main: '#A40E00',
      dark: '#97000F',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#006970',
      dark: '#314EB0',
      contrastText: '#FFF',
    },
    info: {
      light: '#4C4D5A',
      main: '#4C4E54',
      dark: '#454552',
      contrastText: '#FFF',
    },
    success: {
      main: '#377F89',
      dark: '#147A53',
      contrastText: '#FFF',
    },
    warning: {
      main: '#FFABB5',
      dark: '#FFABB5',
      contrastText: WARNING_CONTRAST_TEXT_COLOR,
    },
    error: {
      main: '#EA5A60',
      dark: '#D55544',
      contrastText: '#212121',
    },
    grey: {
      A100: '#F7F7F7',
      A200: '#EFEFF0',
      A700: '#C4C4CF',
      A400: '#B2B2BD',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
  deuteranopia: {
    text: {
      primary: '#717177',
      secondary: '#FFFFFF',
      disabled: '#C4C4D0',
    },
    primary: {
      main: '#684D00',
      dark: '#97000F',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#0061A5',
      dark: '#314EB0',
      contrastText: '#FFF',
    },
    info: {
      light: '#4C4D5A',
      main: '#504C5B',
      dark: '#454552',
      contrastText: '#FFF',
    },
    success: {
      main: '#887062',
      dark: '#147A53',
      contrastText: '#FFF',
    },
    warning: {
      main: '#F7B710',
      dark: '#F7B710',
      contrastText: WARNING_CONTRAST_TEXT_COLOR,
    },
    error: {
      main: '#AB8343',
      dark: '#D55544',
      contrastText: '#212121',
    },
    grey: {
      A100: '#F7F7F7',
      A200: '#EFEFF0',
      A700: '#C4C4CF',
      A400: '#B2B2BD',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
  protanopia: {
    text: {
      primary: '#717177',
      secondary: '#FFFFFF',
      disabled: '#C4C4D0',
    },
    primary: {
      main: '#5B5225',
      dark: '#97000F',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#005BBF',
      dark: '#314EB0',
      contrastText: '#FFF',
    },
    info: {
      light: '#4C4D5A',
      main: '#4C4E5B',
      dark: '#454552',
      contrastText: '#FFF',
    },
    success: {
      main: '#7E7555',
      dark: '#147A53',
      contrastText: '#FFF',
    },
    warning: {
      main: '#DBC219',
      dark: '#DBC219',
      contrastText: WARNING_CONTRAST_TEXT_COLOR,
    },
    error: {
      main: '#968A5B',
      dark: '#D55544',
      contrastText: '#212121',
    },
    grey: {
      A100: '#F7F7F7',
      A200: '#EFEFF0',
      A700: '#C4C4CF',
      A400: '#B2B2BD',
    },
    common: {
      white: '#FFF',
      black: '#000',
    },
  },
};

interface Props {
  typographyType?: string;
  paletteType?: string;
}

const generateTheme = ({
  typographyType = 'default',
  paletteType = 'default',
}: Props) => {
  const typography = typographyList[typographyType.toLowerCase()];
  const palette = paletteList[paletteType.toLowerCase()];

  return responsiveFontSizes(
    createTheme({
      typography,
      palette,
    }),
  );
};

export default generateTheme;
