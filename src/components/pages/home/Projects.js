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
    image: 'https://unsplash.it/1440/900/?1',
  },
  {
    title: 'Twizy Tours',
    image: 'https://unsplash.it/1440/900/?2',
  },
  {
    title: 'Care Cards',
    image: 'https://unsplash.it/1440/900/?3',
  },
  {
    title: 'World Wide Generation',
    image: 'https://unsplash.it/1440/900/?4',
  },
  {
    title: 'Mariah or Messiah',
    image: 'https://unsplash.it/1440/900/?5',
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
