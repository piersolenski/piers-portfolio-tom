import React from 'react';
import styled from 'styled-components';

import Project from './Project';

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 60px;
`;

const PROJECTS = [
  {
    title: 'Feast It',
    image:
      'https://piersolenski.com/thumbs/projects/feast-it/laptop-1440x900.jpg',
  },
  {
    title: 'Twizy Tours',
    image: 'https://piersolenski.com/thumbs/projects/twizy/laptop-1440x900.jpg',
  },
  {
    title: 'Care Cards',
    image:
      'https://piersolenski.com/thumbs/projects/care-cards/laptop-1440x900.jpg',
  },
  {
    title: 'World Wide Generation',
    image:
      'https://piersolenski.com/thumbs/projects/world-wide-generation/laptop-1440x900.jpg',
  },
  {
    title: 'Mariah or Messiah',
    image:
      'https://piersolenski.com/thumbs/projects/mariah-or-messiah/laptop-1440x900.jpg',
  },
];

const Projects = () => (
  <Wrapper>
    {PROJECTS.map((project, i) => (
      <Project
        key={i}
        title={project.title}
        number={i + 1}
        image={project.image}
      />
    ))}
  </Wrapper>
);

export default Projects;
