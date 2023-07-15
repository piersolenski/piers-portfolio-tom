import React, { useState } from 'react';
import styled from 'styled-components';
import { Waypoint } from 'react-waypoint';

import Grid from '../../common/Grid';
import Button from '../../common/Button';
import LayeredImage from './LayeredImage';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 80px;
  padding: 80px 0;
  position: relative;
`;

const Number = styled.span`
  position: absolute;
  opacity: 0.05;
  font-size: 150px;
  left: -50px;
  top: -20px;
`;

const Inner = styled(Grid)`
  &:nth-child(even) {
    text-align: left;
    direction: rtl;
  }
  h2 {
    height: 29px;
  }
  h3 {
    color: #ffffff91;
    text-transform: uppercase;
    font-size: 16px;
    letter-spacing: 3px;
  }
  p {
    font-size: 17px;
    line-height: 1.4em;
  }
`;

const Meta = styled.div`
  position: relative;
  align-self: center;
  grid-column: span 4;
  > div {
    transform: translateX(${({ active }) => (active ? '0' : '-5%')});
    opacity: ${({ active }) => (active ? '1' : '0')};
    transition: all 1.04s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    &:nth-child(2) {
      transition-delay: 0.1s;
    }
    &:nth-child(3) {
      transition-delay: 0.2s;
    }
    &:nth-child(4) {
      transition-delay: 0.3s;
    }
  }
  /* ${Grid}:nth-child(1) & {
    grid-row: 1;
    background: red;
  } */
`;

export default function Project({ title, image, number }) {
  const [visible, setVisible] = useState(false);
  return (
    <Waypoint
      onEnter={() => setVisible(true)}
      onLeave={({ currentPosition }) => {
        return currentPosition === 'below' && setVisible(false);
      }}
      bottomOffset="62%"
    >
      <Wrapper>
        <Inner>
          <Meta active={visible}>
            <Number>{`0${number}`}</Number>
            <div>
              <h2>{title}</h2>
              <h3>Air Bnb for food trucks</h3>
              <p>
                Feast It is a start up offering an easy way to discover and book
                food caterers. The site is a SPA built with React combined with
                Redux for state management, along with a BEM flavoured SASS
                approach for our styles.
              </p>
              <p>
                It features integration with a Node powered CMS through a
                RESTful API, Stripe for payment, and Imgix for responsive and
                retina images.
              </p>
              <Button to="/work">See more</Button>
            </div>
          </Meta>
          <LayeredImage active={visible} url={image} />
        </Inner>
      </Wrapper>
    </Waypoint>
  );
}
