import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Nic Shepard">
      <StaticImage
        alt="it me"
        src="https://pbs.twimg.com/media/FDWqHYzVcAUH-wt?format=jpg&name=large"
      />
      <p>Currently following the Gatsby tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
