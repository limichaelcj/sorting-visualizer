import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from '../components/container/container'
import Title from '../components/title/title'
import Array from '../components/array/array'

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

  const generateArray = (count) => {
    const size = count || 50;
    const arr = [];
    while(arr.length < size) {
      arr.push(Math.floor(Math.random()*100) + 1);
    }
    return arr.map((value,id) => ({ id, value }))
  }

 return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <Title>{data.site.siteMetadata.title}</Title>
        <Array items={generateArray()} />
      </Container>
    </Layout>
  )
}

export default IndexPage
