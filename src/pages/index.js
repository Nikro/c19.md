import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import logoSVG from '../images/c19.svg'
import SEO from '../components/seo'

import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Link from '@material-ui/core/Link';

import StarIcon from '@material-ui/icons/Star'
import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import EmailIcon from '@material-ui/icons/Email'
import ForumIcon from '@material-ui/icons/Forum'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const IndexPage = () => {

  const classes = useStyles()
  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  function handleClick(id) {
    switch(id) {
      case "features":
        setFeatures(!features)
        break;
      case "info":
        setInfo(!info)
        break
    }
  }

  return(
    <Layout>
      <SEO title="Home" />
      <Grid container spacing={3} justify="center">
        <Grid item xs={2}>
          <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
              <img src={logoSVG} />
          </div>
        </Grid>
        <Grid item xs={8}>
          <h1>Instrumente Open Source in contextul Moldovei</h1>
          <h5>
            A responsive, minimalist Gatsby starter based on the world's most
            popular React UI framework.
          </h5>
        </Grid>
      </Grid>
      <Divider />
      <List
        component="nav"
        className={classes.root}
      >

      <ListItem button onClick={() => handleClick("info")}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="Informații de contact" />
        {!info ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={!info} timeout="auto" unmountOnExit>
        <Grid container spacing={10}>
          <Grid item xs={5}>
              <List component="div" disablePadding>
                  <ListItem button className={classes.nested} href={'https://google.com'}>
                      <ListItemIcon><EmailIcon /></ListItemIcon>
                      <ListItemText primary="Contact echipa c19.md" />
                  </ListItem>
                  <ListItem button className={classes.nested}>
                      <ListItemIcon><EmailIcon /></ListItemIcon>
                      <ListItemText primary="Contact echipa technică" />
                  </ListItem>
              </List>
          </Grid>
          <Grid item xs={5}>
              <List component="div" disablePadding>
                  <ListItem button className={classes.nested} href={'https://google.com'}>
                      <ListItemIcon><ForumIcon /></ListItemIcon>
                      <ListItemText primary="Facebook Group" />
                  </ListItem>
              </List>
          </Grid>
        </Grid>

      </Collapse>
    </List>
    </Layout>
  )
}

export default IndexPage
