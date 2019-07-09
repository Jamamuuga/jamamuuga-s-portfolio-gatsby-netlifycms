import React from "react"
import {Container, Typography} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {BlogRoll, Content, Layout} from "../../components"

const useStyles = makeStyles({
  typography: {
    boxShadow: "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
    backgroundColor: "#f40",
    color: "white",
    padding: "1rem",
  }
})

const BlogIndexPage = props => {
  const classes = useStyles(props)

  return (
    <Layout>
      <section className="section">
        <Container className="container">
          <div className="content">
            <div
              className="full-width-image-container margin-top-0"
              style={{
                backgroundImage: `url("/img/blog-index.jpg")`,
              }}
            >
              <Typography
                variant="h1"
                className={classes.typography}
                fontWeight="fontWeightBold"
              >
                {/*                 className="is-size-1" */}
                Latest Stories
            </Typography>
            </div>
          </div>
          <BlogRoll />
        </Container>
      </section>
    </Layout>
  )
}

export default BlogIndexPage
