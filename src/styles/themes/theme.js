// Setup custom Material-UI theme
import React from "react"
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles"
import {green, grey, orange, purple, red} from "@material-ui/core/colors"
// TODO: Make sure theme is fully converted to Material UI v4 compatible.
// TODO: Learn more about custom variables in Material UI themes.

const headlineFont = `Merriweather, Georgia, serif`
const bodyFont = `"Open Sans", Roboto, "Helvetica Neue", Arial, sans-serif`

const theme = responsiveFontSizes (createMuiTheme({
  palette: {
    primary: purple,
    // primary: "#556cd6",
    secondary: green,
    // secondary: "#19857b",
    tertiary: orange,
    error: red,
    // error: red.A400,
    background: {
      default: "#fff",
    },
  },
  typography: {
    // TODO: Stop repeating greys, font weights, & font families.
    fontFamily: bodyFont,
    // fontSize: 14, // default
    // color: grey[500],
    // fontSize1: "3rem",
    // fontSize2: "2.5rem",
    // fontSize3: "2rem",
    // fontSize4: "1.5rem",
    // fontSize5: "1.25rem",
    // fontSize6: "1rem",
    // fontSize7: "0.75rem",
    // fontWeightThin: 100,
    // fontWeightExtraLight: 200,
    fontWeightLight: 300,
    // fontWeightNormal: 400,
    fontWeightRegular: 400,
    // fontWeightMedium: 600,
    fontWeightMedium: 500,
    // fontWeightSemiBold: 600,
    // fontWeightBold: 700,
    // fontWeightExtraBold: 800,
    // fontWeightBlack: 900,
    h4: {
      fontFamily: headlineFont,
      color: grey[900],
    },
    h3: {fontFamily: headlineFont, color: grey[900]},
    h2: {fontFamily: headlineFont, color: grey[900]},
    h1: {fontFamily: headlineFont, color: grey[900]},
    h5: {fontFamily: headlineFont, color: grey[900]},
    subtitle1: {fontFamily: headlineFont, color: grey[900]},
    // h6: {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    h6: {fontFamily: headlineFont, color: grey[900]},
    body2: {
      fontFamily: bodyFont,
      color: grey[700],
      // fontWeight: 400,
      // margin: "1em 0",
      // "& h2": {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
      // "& h3": {fontFamily: headlineFont, color: grey[900], fontWeight: 400},
    },
  },
  overrides: {
    // TODO: Refer to MuiGrid & "spacing-xs-16" in a proper modern way & verify the appropriate places.
    // MuiGrid: {
    //   "spacing-xs-2": {
    //     margin: "0 -8px",
    //     "& > *[class^=MuiGrid-typeItem]": {
    //       padding: "0 8px",
    //     },
    //   },
    // },
  },
}))

export default theme
// export {theme}
