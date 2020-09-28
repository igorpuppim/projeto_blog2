import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <PostItem
      slug="/about/"
      background="#bada55"
      category="misc"
      date="27 de setembro"
      timeToRead="5"
      title="Diga n&atilde;o ao framework javascript desnecess&aacute;rio"
      description="Um post hipocr&iacute;ta constru&iacute;do com framwork"
    ></PostItem>
    
  </Layout>
)

export default IndexPage
