import React from 'react';
import styled from 'styled-components';

import metaConfig from '../../../gatsby-meta-config';

const Cover = styled.section`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding: 100px 0;
  background-color: var(--cover);
  border-bottom: 1px solid var(--line);
  transition: all 0.2s ease;
`;

const CoverContents = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 6%;

  span {
    display: inline-block;
    white-space: nowrap;
  }
`;

const CoverContentTitle = styled.h2`
  color: var(--text);
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.2;

  @media only screen and (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 1.8rem;
  }
`;

const CoverContentSub = styled.p`
  padding-top: 16px;
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;

  @media only screen and (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media only screen and (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

const CoverContentsUser = styled.p`
  margin-top: 24px;
  padding: 0;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

const CoverContentLink = styled.a`
  color: var(--text-secondary);
  text-decoration: none;
  opacity: 1;
  transition: opacity 0.2s ease;

  :hover {
    opacity: 0.7;
  }
`;

const IndexCover: React.FC = () => {
  return (
    <Cover>
      <CoverContents>
        <CoverContentTitle data-sal="slide-up" data-sal-delay="100" data-sal-duration="300" data-sal-easing="ease">
          {metaConfig.slogan}
        </CoverContentTitle>
        <CoverContentSub data-sal="slide-up" data-sal-delay="300" data-sal-duration="300" data-sal-easing="ease">
          {metaConfig.sloganDescription}
        </CoverContentSub>
        <CoverContentsUser data-sal="slide-up" data-sal-delay="600" data-sal-duration="300" data-sal-easing="ease">
          <CoverContentLink href={`https://github.com/${metaConfig.social.github}`} target="_blank">
            {`@${metaConfig.social.github}`}
          </CoverContentLink>
        </CoverContentsUser>
      </CoverContents>
    </Cover>
  );
};

export default IndexCover;
