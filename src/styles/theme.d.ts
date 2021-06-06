import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;

    colors: {
      primary: string;
      primaryWeak: string;
      primaryStrong: string;

      light: string;
      dark: string;

      danger: string;
      success: string;
    }
  }
}
