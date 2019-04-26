import React from "react"
import {graphql, withPrefix} from "gatsby"
import {Grid, Paper, Typography} from "@material-ui/core"
import {withStyles} from "@material-ui/styles"
import {Page, SEO} from "../components"
// Another helper tool somehow made it possible to put this here instead of top & need eslint disable line.
import withRoot from "../tools/withRoot"

const styles = {
  paper: {
    padding: "25px",
  },
  image: {
    width: "100%",
  },
}

const Team = ({classes, data}) => {
  const {
    title,
    image: {publicURL},
    jobtitle,
  } = data.markdownRemark.frontmatter
  const {html} = data.markdownRemark

  return (
    <Page>
      <SEO title={title} />
      <Paper className={classes.paper}>
        <Grid
          spacing={24}
          container
          direction="row"
          alignItems="flex-start"
          justify="center"
        >
          <Grid item xs={12} md={4}>
            <img className={classes.image} src={withPrefix(publicURL)} alt="" />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom variant="h2" component="h2">
              {title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h5">
              {jobtitle}
            </Typography>
            <Typography dangerouslySetInnerHTML={{__html: html}} />
          </Grid>
        </Grid>
      </Paper>
    </Page>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        image {
          publicURL
        }
        title
        path
        jobtitle
      }
      html
    }
  }
`

const TeamWrapped = withRoot(withStyles(styles)(Team))

export default TeamWrapped
export {TeamWrapped as Team}
