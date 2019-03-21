import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import Helmet from 'react-helmet'

const IndexPage = () => (
  <Layout>
    <Helmet
      meta={[
        {
          name: 'description', content: 'We learn Javascript in 101 lessons',
        },
      ]}
    >
      <html lang="en"/>
    </Helmet>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image/>
    </div>
    {/*<Link to="/page-2/">Go to page 2</Link>*/}
    <Link to="/nan/">NaN</Link><br/>
    <Link to="/boolean-string-number/">Boolean string number</Link><br/>
    <Link to="/null-and-undefined/">null and undefined</Link><br/>
    <Link to="/pop-ups/">pop-ups</Link><br/>
  </Layout>
)

export default IndexPage
