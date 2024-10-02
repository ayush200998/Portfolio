import React from 'react';
import Link from 'next/link'
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
        Web Developer from Raipur, I enjoy building everything from small business
        sites to rich interactive web apps.
      </SectionText>
      <Link href='https://www.cakeresume.com/ayush-khakharia' legacyBehavior><Button> Learn More </Button></Link>
    </LeftSection>
  </Section>
);

export default Hero;