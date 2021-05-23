import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Nav from '../components/nav'


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
