import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default ({ data }) => {

  const classes = useStyles()

  const ideaCards = data.allIdeasYaml.nodes
  const projectsCards = data.allProjectsYaml.nodes

  console.log(data)
  console.log('test')

  return(
    <Layout>
      <SEO title="Home" />

      <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: `30px`}}>
        {/* End hero unit */}
        <Typography align="center" paragraph><h1>Idei propuse</h1></Typography>
        <Grid container spacing={4}>
          {ideaCards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.name }
                  </Typography>
                  <Typography variant="body2" component="p">
                    { card.description }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Vreau să mă implic
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: `50px`}}>
        {/* End hero unit */}
        <Typography align="center" paragraph><h1>Proiecte în dezvoltare</h1></Typography>
        <Grid container spacing={4}>
          {projectsCards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.name }
                  </Typography>
                  <Typography variant="body2" component="p">
                    { card.description }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Proiect
                  </Button>
                  <Button size="small" color="primary">
                    Sursă
                  </Button>
                </CardActions>


                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography variant="caption">Avem nevoie de:</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <List className={classes.root} dense>
                      {card.requests.map((requestItem, index) => (
                        <React.Fragment>
                          <ListItem>
                            <ListItemAvatar>
                              <Avatar alt={requestItem.subtype} src={`/images/` + requestItem.img} />
                            </ListItemAvatar>
                            <ListItemText
                              primary={requestItem.type}
                              secondary={requestItem.subtype}
                            />
                          </ListItem>
                          { index !== (card.requests.length -1) && (
                            <Divider variant="inset" component="li" />
                          )}
                        </React.Fragment>
                      ))}
                    </List>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query Ideas {
    allIdeasYaml {
      nodes {
        name
        description
        github
        id
        url
      }
      totalCount
    }
    allProjectsYaml {
      nodes {
        name
        description
        github
        id
        url
        requests {
          img
          type
          subtype
        }
      }
      totalCount
    }
  }
`
