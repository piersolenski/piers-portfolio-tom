import React from 'react';
import styled from 'styled-components';

import Grid from '../../common/Grid';

const Wrapper = styled.div``;

const Inner = styled(Grid)`
  height: 100vh;
`;

const Spiel = styled.p`
  grid-column: span 12;
`;

const About = () => (
  <Wrapper>
    <Inner>
      <Spiel>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore nisi
        voluptatum iure eum assumenda ipsum non. Iste eos ipsa provident ducimus
        aperiam nostrum reiciendis repellendus cumque, excepturi consectetur ab
        temporibus.
      </Spiel>
    </Inner>
  </Wrapper>
);

export default About;
