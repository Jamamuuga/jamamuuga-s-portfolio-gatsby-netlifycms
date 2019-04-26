import React from "react"
import PropTypes from "prop-types"
import {CardContent, Grid, Paper, Typography} from "@material-ui/core"
import {unstable_Box as Box} from "@material-ui/core/Box"
import {Card, PreviewCompatibleImage as Image} from "."

const FeatureGrid = ({gridItems}) => (
  <Grid container wrap="wrap">
    {gridItems.map(item => (
      <Grid item xs={6} key={item.text}>
        <Card component="section">
          <CardContent>
            <Typography component="div" paragraph align="center">
              <Box width="240px" display="inline-block">
                <Image imageInfo={item} />
              </Box>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography paragraph>{item.text}</Typography>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
)

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    }),
  ),
}

export default FeatureGrid
export {FeatureGrid as Features}
