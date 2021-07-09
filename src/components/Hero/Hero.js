import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Hey, I'm Ayush
      </SectionTitle>
      <SectionText>
        Web Developer from Bangalore, I enjoy building everything from small business
        sites to rich interactive web apps.
      </SectionText>
      <Button> Learn More </Button>
    </LeftSection>
  </Section>
);

export default Hero;