import React from 'react';
import styled from 'styled-components';

import Head from '../components/head';
import Navigation from '../components/navigation';
import Footer from '../components/footer';
import { HighlightStyle } from '../styles';

const Main = styled.main`
  width: 100%;
  max-width: 1280px;
  min-height: 100%;
  margin: 0 auto;
  padding: 0 6%;

  .utterances {
    max-width: 100% !important;
  }

  .katex {
    font-size: 1.1rem !important;
    font-family: 'Times New Roman', serif !important;
  }

  .katex .mathnormal {
    font-family: 'Times New Roman', serif !important;
  }
`;

const Container = styled.div`
  min-height: 100%;
  padding-top: 56px;
  background-color: var(--primary);
  transition: background-color 0.2s ease;
`;

type SitePageContext = {
  children: React.ReactNode;
};

const PostLayout: React.FC<SitePageContext> = React.memo(({ children }) => {
  return (
    <React.Fragment>
      <Head />
      <Navigation />
      <HighlightStyle />
      <Container>
        <Main className="intro-animation">{children}</Main>
      </Container>
      <Footer />
    </React.Fragment>
  );
});

export default PostLayout;
