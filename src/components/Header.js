import React from "react"
import {StaticQuery, graphql} from "gatsby"
import {
  AppBar,
  Avatar,
  Chip,
  Grid,
  Hidden,
  makeStyles,
  Toolbar,
  Typography,
  // useTheme,
} from "@material-ui/core"
// import {red} from "@material-ui/core/colors"
import styled from "styled-components"
import {PaletteOutline} from "mdi-material-ui"
import {Link, Menu, MenuMobile} from "."
// FIXME: Get color assignment issues sorted out so things like hard-coding aren't necessary.

const useStyles = makeStyles(theme => ({
  // appBar: {
  //   color: "primary",
  //   // color: theme.palette.primary,
  // },
  avatar: {
    // backgroundColor: palette.tertiary,
    // backgroundColor: "tertiary",
    // backgroundColor: "secondary.light",
    backgroundColor: theme.palette.secondary.light,
  },
  chip: {
    // color: palette.secondary,
    // color: "secondary.light",
    color: theme.palette.secondary.light,
  },
}))

const StyledAppBar = styled(AppBar)(props => ({
  color: "#f44336",
  // color: props.theme.palette.primary.main,
}))

const Header = props => {
  // const theme = useTheme()
  const classes = useStyles(props)

  // <AppBar id="appBar" className={classes.appBar}>
  // <AppBar id="appBar" color="#f44336">
  // <AppBar id="appBar" color="primary">
  return (
    <StyledAppBar id="appBar">
      <Toolbar>
        <Grid container justify="space-between" alignItems="center" spacing={2}>
          <Grid item>
            <Chip
              id="logo"
              className={classes.chip}
              variant="default"
              avatar={
                <Avatar id="logoIcon" className={classes.avatar}>
                  <PaletteOutline />
                </Avatar>
              }
              label={
                <Link to="/">
                  {props.data.site.siteMetadata.title.toUpperCase()}
                </Link>
              }
            />
          </Grid>
          <Grid item>
            <Hidden smDown>
              <Typography component="span" variant="caption">
                <Menu />
              </Typography>
            </Hidden>
            <Hidden mdUp>
              <MenuMobile />
            </Hidden>
          </Grid>
        </Grid>
        <Grid item />
      </Toolbar>
    </StyledAppBar>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            contact {
              email
              phone
            }
          }
        }
      }
    `}
    render={data => <Header data={data} />}
  />
)
