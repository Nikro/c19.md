/**
* Layout component that queries for data
                                    * with Gatsby's StaticQuery component
*
* See: https://www.gatsbyjs.org/docs/static-query/
  */

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logoSVG from '../images/c19.svg'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';

import InfoIcon from '@material-ui/icons/Info'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import EmailIcon from '@material-ui/icons/Email'
import ForumIcon from '@material-ui/icons/Forum'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Header from './header'
import './layout.css'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles()

  const [features, setFeatures] = React.useState(true)
  const [info, setInfo] = React.useState(true)

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), {
    defaultMatches: true
  });

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

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <div style={{ minHeight: '100vh', backgroundColor: '#FFF' }}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 100,
            }}
          >
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} sm={3} md={2}>
                <div style={{ maxWidth: `120px`, marginLeft: `auto`, marginRight: `auto` }}>
                  <img src={logoSVG} style={{ marginBottom: 0 }}/>
                </div>
              </Grid>
              <Grid item xs={12} sm={8} md={8}>
                <h1 style={{ marginTop: `1rem` }}>Instrumente Open Source in contextul Moldovei</h1>
              </Grid>
              <Grid item xs={12}>
                <Hidden only={['xs']}>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    Alătură-te și tu comunității noastre și hai împreună să găsim soluții pentru informarea, prevenirea și
                    îmbunătățirea situației critice cauzate de COVID-19, cu ajutorul tehnologiilor moderne disponibile azi!
                  </Typography>
                </Hidden>
                <Hidden smUp >
                  <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
                    Alătură-te și tu comunității noastre și hai împreună să găsim soluții pentru informarea, prevenirea și
                    îmbunătățirea situației critice cauzate de COVID-19, cu ajutorul tehnologiilor moderne disponibile azi!
                  </Typography>
                </Hidden>
              </Grid>
            </Grid>

            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScl4_Adqe5vMAO95lN9A1Bibf4y3X8aGXh1_yBY1X_Ew7KxMg/viewform">
                    Adaugă proiect / idee nouă
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" href="https://docs.google.com/forms/d/e/1FAIpQLScpzaozEhpFT5xYwJ8OkEsxW3eWl2U2TcYlf56FMtwy3AMRZQ/viewform">
                    Aplică la următorul Hackathon
                  </Button>
                </Grid>
              </Grid>
            </div>

            <main style={{paddingTop: `30px`, paddingBottom: `30px`}}>{children}</main>

            <List component="nav" className={classes.root}>
              <ListItem button onClick={() => handleClick("info")}>
                <ListItemIcon>
                  <InfoIcon />
                </ListItemIcon>
                <ListItemText primary="Informații de contact" />
                {!info ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={!info} timeout="auto" unmountOnExit>
                <Grid container spacing={isMobile ? 0 : 10}>
                  <Grid item xs={12} sm={5}>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested} component={Link} href="mailto:contact@c19.md">
                        <ListItemIcon><EmailIcon /></ListItemIcon>
                        <ListItemText primary="Contact echipa c19.md" />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="mailto:tech@c19.md">
                        <ListItemIcon><EmailIcon /></ListItemIcon>
                        <ListItemText primary="Contact echipa technică" />
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid item xs={12} sm={5}>
                    <List component="div" disablePadding>
                      <ListItem button className={classes.nested} component={Link} href="https://www.facebook.com/groups/c19mdopensource">
                        <ListItemIcon><ForumIcon /></ListItemIcon>
                        <ListItemText primary="Facebook Group" />
                      </ListItem>
                      <ListItem button className={classes.nested} component={Link} href="https://join.slack.com/t/c19md/shared_invite/zt-crwaj52o-t7WS8QBy2cM78eYd4fEhxw">
                        <ListItemIcon><ForumIcon /></ListItemIcon>
                        <ListItemText primary="Discuții Slack" />
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>

              </Collapse>
            </List>
            <footer style={{ paddingTop: 10 }}>
              <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Creat de un grup de voluntari - {new Date().getFullYear()}.
              </Typography>
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
