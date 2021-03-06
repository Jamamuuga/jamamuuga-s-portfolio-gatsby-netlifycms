import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  GridList,
  GridListTile,
  Hidden,
  Paper,
  Typography,
} from "@material-ui/core"
import { PhotoCamera as CameraIcon } from "@material-ui/icons"
import styled from "styled-components/macro"
import {
  Features,
  Layout,
  Pricing,
  PreviewCompatibleImage,
  Testimonials,
} from "../components"
// Partly based on Material UI Album Example.
// TODO: Maybe use Cards, Lists, and/or Grids instead of GridList
// FIXME: Fix Grid & GridList with images between text grid & testimonial area. That area isn't loading the images & is complaining about duplicate keys named "NA".
// TODO: Use Skeleton components as loading placeholders.

const StyledBackgroundImageBox = styled(Box)`
  /* Contains .full-width-image-container and .margin-top-0 */
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 5em -50vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0 !important;
`

const StyledFullWidthImageBox = styled(Box)`
  /* Contains .full-width-image-container */
  width: 100vw;
  height: 400px;
  position: relative;
  left: 50%;
  right: 50%;
  margin: 5em -50vw;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledSectionBox = styled(Box)`
  padding-top: 2;
  padding-bottom: 2;
`

const StyledSectionBoxGradient = styled(Box)`
  /* TODO: Add section--gradient from old stylesheet. */
  padding-top: 2;
  padding-bottom: 2;
`

const StyledTitleTypography = styled(Typography)`
  /* box-shadow: 0.5rem 0 0 #f40, -0.5rem 0 0 #f40; */
  box-shadow: 0.5rem 0 0 ${props => props.theme.palette.primary.main},
    -0.5rem 0 0 ${props => props.theme.palette.primary.main};
  /* background-color: #f40; */
  background-color: ${props => props.theme.palette.primary.main};
  color: white;
  padding: 1rem;
`

const StyledCameraIcon = styled(CameraIcon)`
  margin-right: ${props => props.theme.spacing(2)};
`

const StyledHeroContent = styled.div`
  background-color: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(8, 0, 6)};
`

const StyledHeroButtons = styled(Button)`
  margin-top: ${props => props.theme.spacing(4)};
`

const StyledCardGrid = styled(Grid)`
  padding-top: ${props => props.theme.spacing(8)};
  padding-bottom: ${props => props.theme.spacing(8)};
`

const StyledAlbumCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%; /* 16:9 */
`

const StyledCardContent = styled(CardContent)`
  flex-grow: 1;
`

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.palette.background.paper};
  padding: ${props => props.theme.spacing(6)};
`

export const PortfolioPageTemplate = ({
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
    <StyledSectionBoxGradient component="section">
      <Container>
        <StyledSectionBox component="section">
          <Grid container>
            <Grid item md={1} implementation="css" smDown component={Hidden} />
            <Grid item xs={10}>
              <Box className="content">
                <StyledBackgroundImageBox
                  style={{
                    backgroundImage: `url(${
                      image.childImageSharp
                        ? image.childImageSharp.fluid.src
                        : image
                      })`,
                  }}
                >
                  <StyledTitleTypography variant="h3">
                    <Box fontWeight="600">
                      {title}
                    </Box>
                  </StyledTitleTypography>
                </StyledBackgroundImageBox>
                <Grid container>
                  <Grid item xs={7}>
                    <Typography variant="h4">
                      <Box fontWeight="600">
                        {heading}
                      </Box>
                    </Typography>
                    <Typography paragraph>{description}</Typography>
                  </Grid>
                </Grid>
                <Features gridItems={intro.blurbs} />
                <Grid container className="columns">
                  <Grid item xs={7}>
                    <Typography variant="h4">
                      <Box fontWeight="600">
                        {main.heading}
                      </Box>
                    </Typography>
                    <Typography paragraph>{main.description}</Typography>
                  </Grid>
                </Grid>
                <Box className="tile is-ancestor">
                  <Grid container className="tile is-vertical">
                    <Grid item>
                      <GridList className="tile">
                        <GridListTile className="tile is-parent is-vertical">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image1} />
                          </article>
                        </GridListTile>
                        <GridListTile className="tile is-parent">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image2} />
                          </article>
                        </GridListTile>
                      </GridList>
                    </Grid>
                    <Grid item>
                      <GridList>
                        <GridListTile className="tile is-parent">
                          <article className="tile is-child">
                            <PreviewCompatibleImage imageInfo={main.image3} />
                          </article>
                        </GridListTile>
                      </GridList>
                    </Grid>
                  </Grid>
                </Box>
                <Testimonials testimonials={testimonials} />
                <StyledFullWidthImageBox
                  style={{
                    backgroundImage: `url(${
                      fullImage.childImageSharp
                        ? fullImage.childImageSharp.fluid.src
                        : fullImage
                      })`,
                  }}
                />
                <Typography variant="h3">
                  <Box fontWeight="600">
                    {pricing.heading}
                  </Box>
                </Typography>
                <Typography variant="h6" paragraph>
                  {pricing.description}
                </Typography>
                <Pricing data={pricing.plans} />
              </Box>
            </Grid>
          </Grid>
        </StyledSectionBox>
      </Container>
    </StyledSectionBoxGradient>
  )

PortfolioPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const PortfolioPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PortfolioPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        intro={frontmatter.intro}
        main={frontmatter.main}
        testimonials={frontmatter.testimonials}
        fullImage={frontmatter.full_image}
        pricing={frontmatter.pricing}
      />
    </Layout>
  )
}

PortfolioPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export const portfolioPageQuery = graphql`
  query PortfolioPage($id: String!) {
    markdownRemark(id: {eq: $id}) {
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
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`

export default PortfolioPage
