import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Box from '../components/box/box'

const IndexPage = () => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

 return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <h1>{data.site.siteMetadata.title}</h1>
        <Box size={10} color='#222' />
        <Box  color='#222' />
      </Container>
    </Layout>
  )
}

export default IndexPage
