import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
  }
`
export const colors = {
  blue: "#3c7196",
  green: "#50ba9e",
  bgGreen: "rgba(80, 183, 186, 0.42)",
  shadow: "rgba(0, 0, 0, 0.25)",
  white: "#ffffff",
  black: "#000000",
  gray: "#cccccc"
}