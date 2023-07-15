import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 50px 0 0;
  position: absolute;
  text-transform: uppercase;
  font-weight: bold;
  border-left: 1px solid rgba(255, 255, 255, 0.25);
  padding-left: 20px;
`;

const Heading = styled.div`
  display: block;
  font-size: 14px;
  opacity: 0.5;
  /* margin-bottom: 5px; */
`;

const Value = styled.div`
  font-size: 25px;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Status = () => (
  <Wrapper>
    <Heading>Status</Heading>
    <Value>Freelance</Value>
    <Heading>Availability</Heading>
    <Value>October 2019</Value>
    <Heading>Location</Heading>
    <Value>London</Value>
  </Wrapper>
);

export default Status;
