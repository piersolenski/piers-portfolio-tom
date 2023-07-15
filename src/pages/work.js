import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/common/Layout';
import Grid from '../components/common/Grid';
import SEO from '../components/common/Seo';

const Image = styled.img`
  grid-column: span 12;
  margin-top: 100px;
`;

const SecondPage = () => (
  <Layout>
    <SEO title="Feast It" />
    <Grid>
      <Image src="https://onepagelove.imgix.net/2018/07/opl-big-2.jpg" />
    </Grid>
  </Layout>
);

export default SecondPage;
