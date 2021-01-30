import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      bg_color: string;
    };
    fonts: {
      Black: string;
      Bold: string;
      Heavy: string;
      Light: string;
      Medium: string;
      Regular: string;
      Semibold: string;
      Thin: string;
      Ultralight: string;
    };
  }
}
