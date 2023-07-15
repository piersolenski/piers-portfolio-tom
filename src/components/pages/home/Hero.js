import React from 'react';
import styled from 'styled-components';

import Grid from '../../common/Grid';

import Avatar from './Avatar';
import Status from './Status';

const Wrapper = styled.div``;

const Inner = styled(Grid)`
  height: 100vh;
  position: relative;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 100px;
  white-space: nowrap;
  margin: 0;
  font-family: AutoScape;
`;

const Job = styled.div`
  font-family: AutoScape;
  font-size: 60px;
  white-space: nowrap;
  margin: 0;
  -webkit-text-fill-color: rgba(0, 0, 0, 0);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
`;

const HGroup = styled.div`
  grid-column: span 5;
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 20px;
  left: calc(50% - 10px);
  height: 20px;
  width: 20px;
`;

const Code = styled.div`
  position: absolute;
  top: 16%;
  left: 0;
  writing-mode: vertical-rl;
  opacity: 0.5;
  transform: scale(-1, 1);
`;

const Hero = () => (
  <Wrapper>
    <Inner>
      <Code>2@40$32#s-23.js</Code>
      <HGroup>
        <Title>P/Olenski</Title>
        <Job>Front End Dev.</Job>
        <Status />
      </HGroup>
      <Avatar />
      <ScrollDown>Down</ScrollDown>
    </Inner>
  </Wrapper>
);

export default Hero;
