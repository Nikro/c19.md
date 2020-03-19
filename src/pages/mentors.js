import React from 'react'
import { graphql } from "gatsby"

import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import {Link as LinkInt} from "gatsby-plugin-intl"
import { useIntl } from "gatsby-plugin-intl"


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  headers: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(4),
  },
  card: {
    display: "flex",
    flexDirection: "column",
    height: '100%',
  }
}));


const Mentors = ({ data }) => {
  const classes = useStyles()
  const intl = useIntl()

  const mentorCards = data.allMentorsYaml.nodes

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "mentors.title" })} />


      <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: `30px`}}>
        <Typography align="center" className={classes.headers} component="span"><h1>{intl.formatMessage({ id: "mentors.title" })}</h1></Typography>
        <Grid container spacing={4} alignItems="stretch">
          {mentorCards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  component="img"
                  image={card.image.childImageSharp.fixed.src}
                  title={card.name}
                  style={{marginBottom: 0}}
                  height="240"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.name }
                  </Typography>
                  <Typography variant="body2" component="p" dangerouslySetInnerHTML={{ __html: card.description[intl.locale] }} />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Layout>
  )
}

export default Mentors

export const MentorsPageQuery = graphql`
  query Mentors {
    allMentorsYaml {
      nodes {
        name
        description {
          ro
          ru
          en
        }
        image {
          childImageSharp {
            fixed(width: 400, height: 300) {
              src
            }
          }
        }
      }
      totalCount
    }
  }
`
