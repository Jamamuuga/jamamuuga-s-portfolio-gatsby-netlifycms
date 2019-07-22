import React from "react"
import {PropTypes} from "prop-types"
import {graphql} from "gatsby"
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Button,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {Card, BlogRoll, Features, Layout, Link} from "../components"

// TODO: Maybe use Card instead of or around Paper.

// TODO: Convert everything to use React Hooks (Don't forget the ESLint plugin), Babel-Blade (DRY GraphQL), & functions not classes.

// TODO: Delete commented extra style format versions when satifisfied that the uncommented one works.

// FIXME: complains about object is not a function....
// const useStyles = makeStyles(theme => ({
//   root: {
//     textAlign: "center",
//     paddingTop: "20",
//   },
//   cardMedia: {
//     height: "200px",
//   },
// }))

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    // Spacing can be either called on a imported theme object, or imported from @material-ui/system.
    paddingTop: "20",
  },
  cardMedia: {
    height: "200px",
  },
})

// const styles = {
//   root: {
//     textAlign: "center",
//     paddingTop: "20",
//   },
//   cardMedia: {
//     height: "200px",
//   },
// }

export const IndexPageTemplate = ({
  // classes,
  // data,
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
  // main,
  // eslint-disable-next-line
}) => {
  const classes = useStyles()

  // eslint-disable-next-line
  return (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: "flex",
            height: "150px",
            lineHeight: "1",
            justifyContent: "space-around",
            alignItems: "left",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h1" fontWeight="fontWeightBold"
            className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
            style={{
              boxShadow:
                "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
              backgroundColor: "rgb(255, 68, 0)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h3"
            fontWeight="fontWeightBold"
            className="is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
            style={{
              boxShadow:
                "rgb(255, 68, 0) 0.5rem 0px 0px, rgb(255, 68, 0) -0.5rem 0px 0px",
              backgroundColor: "rgb(255, 68, 0)",
              color: "white",
              lineHeight: "1",
              padding: "0.25em",
            }}
          >
            {subheading}
          </Typography>
        </div>
      </div>
      <section className="section section--gradient">
        <Container>
          <section className="section">
            <Grid container>
              <Grid item xs={10} className="is-offset-1">
                <Box className="content">
                  <Box className="content">
                    <Paper className="tile">
                      <Typography variant="h1" className="title">
                        {mainpitch.title}
                      </Typography>
                    </Paper>
                    <Paper className="tile">
                      <Typography variant="h3" className="subtitle">
                        {mainpitch.description}
                      </Typography>
                    </Paper>
                  </Box>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography
                        variant="h3"
                        fontWeight="600"
                      >
                        {heading}
                      </Typography>
                      <Typography paragraph>{description}</Typography>
                    </Grid>
                  </Grid>
                  <Features gridItems={intro.blurbs} />
                  <Grid container className="columns">
                    <Grid item xs={12} align="center" className="column">
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/portfolio">
                          See all portfolio
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                  {/* <Grid item xs={12} className="column">
                    <Typography
                      variant="h3"
                      fontWeight="600"
                    >
                      Latest stories
                    </Typography>
                      <BlogRoll />
                    <Grid item xs={12} align="center">
                      <Button variant="contained" color="secondary">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </Button>
                    </Grid>
                  </Grid> */}
                </Box>
              </Grid>
            </Grid>
          </section>
        </Container>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`

export default IndexPage
// export {IndexPageTemplate, pageQuery}
// export {IndexPage}
