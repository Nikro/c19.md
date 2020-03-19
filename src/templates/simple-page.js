import React from 'react'
import { graphql } from "gatsby"

import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/layout'
import SEO from '../components/seo'

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
  },
  paragraph: {
    margin: "20px 0",
  }
}));

export default function Template({data}) {
  const classes = useStyles()
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div
        className="simple-page"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`