import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import CardMedia from '@material-ui/core/CardMedia'
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
import Chip from '@material-ui/core/Chip';
import CodeIcon from '@material-ui/icons/Code';
import IconButton from '@material-ui/core/IconButton';
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import LinkIcon from '@material-ui/icons/Link';
import LinkOffIcon from '@material-ui/icons/LinkOff';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import {Link as LinkInt} from "gatsby-plugin-intl"
import Tooltip from '@material-ui/core/Tooltip';
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
    justifyContent: "space-between",
    height: '100%',
  },
  media: {
    height: 200,
  },
}));

export default ({ data }) => {
  const classes = useStyles()
  const intl = useIntl()

  const ideaCards = data.allIdeasYaml.nodes
  const projectsCards = data.allProjectsYaml.nodes

  return(
    <Layout>
      <SEO
        title={intl.formatMessage({ id: "index.title" })}
        lang={intl.locale}
      />

      <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: `50px`}}>
        <Typography align="center" className={classes.headers} component="span"><h1>{intl.formatMessage({ id: "index.title" })}</h1></Typography>
        <Grid container spacing={4}>
          {projectsCards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4} key={card.id}>
              <Card className={classes.card}>
                { card.image && (
                  <CardMedia
                    className={classes.media}
                    image={card.image.childImageSharp.fixed.src}
                    title={card.name[intl.locale]}
                  />
                )}
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.name[intl.locale] }
                  </Typography>
                  <Typography variant="body2" component="p" color="textSecondary">
                    { card.description[intl.locale] }
                  </Typography>
                  { card.status === 'active' && (
                    <Chip
                      icon={<WorkOutlineIcon />}
                      label={intl.formatMessage({ id: "status.active" })}
                      color="primary"
                      size="small"
                      style={{ marginTop: '10px', marginBottom: '5px', padding: '3px'}}
                    />
                  )}
                  { card.status === 'unaffiliated' && (
                    <Chip
                      icon={<LinkOffIcon />}
                      label={intl.formatMessage({ id: "status.unaffiliated" })}
                      color="secondary"
                      size="small"
                      style={{ marginTop: '10px', marginBottom: '5px', padding: '3px'}}
                    />
                  )}
                </CardContent>
                <CardActions>
                  { card.url && (
                    <Tooltip title={intl.formatMessage({ id: 'tooltip.url' })}>
                      <IconButton color="primary" href={card.url}>
                        <LinkIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  { card.github && (
                    <Tooltip title={intl.formatMessage({ id: 'tooltip.source' })}>
                      <IconButton color="primary" href={card.github}>
                        <CodeIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  { card.trello && (
                    <Tooltip title={intl.formatMessage({ id: 'tooltip.trello' })}>
                      <IconButton color="primary" href={card.trello}>
                        <SpeakerNotesIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </CardActions>

                { card.requests && (
                  <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      <Typography variant="caption">{intl.formatMessage({ id: "index.action_info_need" })}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <List className={classes.root} dense>
                        {card.requests.map((requestItem, index) => (
                          <React.Fragment key={index}>
                            <ListItem>
                              <ListItemAvatar>
                                {(requestItem.image) ? (
                                  <Avatar alt={requestItem.subtype} src={requestItem.image.childImageSharp.fixed.src} />
                                ) : (
                                  <Avatar alt={requestItem.subtype} />
                                )}
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
                        <ListItem>
                          <Button variant="contained" color="primary" fullWidth href={card.apply}>
                            {intl.formatMessage({ id: "index.action_apply_team" })}
                          </Button>
                        </ListItem>
                      </List>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                )}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Container className={classes.cardGrid} maxWidth="md" style={{marginTop: `30px`}}>
        <Typography align="center" className={classes.headers} component="span"><h1>
          {intl.formatMessage({ id: "index.heading_second" })}
        </h1></Typography>
        <Grid container spacing={4} alignItems="stretch">
          {ideaCards.map(card => (
            <Grid item key={card} xs={12} sm={6} md={4} key={card.id}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    { card.name[intl.locale] }
                  </Typography>
                  <Typography variant="body2" component="p">
                    { card.description[intl.locale] }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={card.url}>
                    {intl.formatMessage({ id: "index.action_apply" })}
                  </Button>
                  <IconButton color="primary" href={card.trello}>
                    <SpeakerNotesIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Layout>
  )
}

export const IndexPageQuery = graphql`
  query IdeasProjects {
    allIdeasYaml {
      nodes {
        name {
          ro
          ru
          en
        }
        description {
          ro
          ru
          en
        }
        id
        url
        trello
      }
      totalCount
    }
    allProjectsYaml {
      nodes {
        name {
          ro
          ru
          en
        }
        description {
          ro
          ru
          en  
        }
        github
        id
        url
        trello
        status
        image {
          childImageSharp {
            fixed(height: 200) {
              src
            }
          }
        }
      }
      totalCount
    }
  }
`
