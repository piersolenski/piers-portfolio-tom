import React from 'react';

import Layout from '../components/common/Layout';
import SEO from '../components/common/Seo';
import Header from '../components/pages/home/Header';
import Hero from '../components/pages/home/Hero';
import Projects from '../components/pages/home/Projects';
import About from '../components/pages/home/About';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Front-End Web Creative"
      keywords={[`gatsby`, `react`, `digital`]}
    />
    <Header />
    <Hero />
    <Projects />
    <About />
  </Layout>
);

export default IndexPage;
