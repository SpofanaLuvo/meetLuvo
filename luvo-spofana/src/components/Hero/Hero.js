import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>Welcome To <be/>
    My World</SectionTitle>
    <SectionText>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia harum corporis voluptatem, exercitationem asperiores rem ex quos dolorum perspiciatis quia consequatur dolor, illo odio, error aspernatur magnam tenetur nemo quam?
    </SectionText>
    <Button onClick={() => window.location = 'https://luvospofana.com'}>Get in touch</Button>
  </LeftSection>
  </Section>
);

export default Hero;