import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Featured from "../components/featured"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Featured />
  </Layout>
)

export default IndexPage
