import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const ThirdPage = () => (
  <Layout>
    <h1>Hi from the THIRD page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/page-2">Go back to Page 2</Link>
  </Layout>
)

export const Head = () => <Seo title="Page Three" />

export default ThirdPage