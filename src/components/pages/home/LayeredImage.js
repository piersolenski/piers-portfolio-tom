import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const riseUp = keyframes`
  0% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0%);
  }
`;

const Wrapper = styled.figure`
  margin: 0;
  position: relative;
  height: 0;
  padding-bottom: 80%;
  grid-column: span 8;
`;

const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  z-index: ${({ layer }) => 4 - layer};
  transform: translateY(${({ active }) => (active ? '0' : '10%')});
  /* transition: transform 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)
      ${({ layer }) => layer * 0.05}s,
    opacity 1s ease ${({ layer }) => layer * 0.1}s; */
  opacity: ${({ active }) => (active ? '1' : '0')};

  ${({ active }) =>
    active &&
    css`
      animation: ${riseUp} 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)
          ${({ layer }) => layer * 0.05}s both,
        ${fadeIn} 1s ease ${({ layer }) => layer * 0.1}s both;
    `}
`;

const Img = styled.img`
  transform: translateY(${({ layer }) => layer * 10}%) rotateZ(-60deg)
    skewY(30deg) scale(0.635);
  opacity: ${({ layer }) => (4 - layer) * 0.2};
  /* filter: contrast(${({ layer }) => (4 - layer) * 0.25})
    grayscale(${({ layer }) => (4 - layer) * 0.25}); */
  transition: transform ease .5s, filter ease .25s;
  /* transform: translateY(${({ layer }) =>
    1 - layer}%) rotateZ(0) skewY(0) scale(${({ layer }) => 1 - layer * 0.2}) */
  
  /* ${Wrapper}:hover & {
    transform: translateY(0) rotateZ(0deg) skewY(0deg) scale(.9);
    filter: grayscale(0);
  } */
`;

const LayeredImage = ({ url, active }) => (
  <Wrapper>
    {[1, 2, 3, 4].map((n, i) => (
      <ImgWrapper layer={i} active={active} key={i}>
        <Img src={url} layer={i} />
      </ImgWrapper>
    ))}
  </Wrapper>
);

export default LayeredImage;

LayeredImage.propTypes = {
  url: PropTypes.string.isRequired,
  active: PropTypes.string.isRequired,
};
