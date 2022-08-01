import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <StaticImage
        alt="it me"
        src="../images/FrankPastry.jpeg"
      />
      <p>Currently following the Gatsby tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
