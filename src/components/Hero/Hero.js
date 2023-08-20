import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Bienvenue à <br />
        Mon personnel portfolio
        </SectionTitle>
        <SectionText>
            BERRICHE Amine  <br/>Un développeur informatique dynamique et motivé avec une passion pour résoudre des problèmes complexes et l'adaptabilité nécessaire pour accomplir toute mission qui m'est confiée. Travailler à vos côtés me fournirait une expérience très enrichissante, tant sur le plan personnel que professionnel.
        </SectionText>
           <a href='BERRICHE Amine CV.pdf' download='BERRICHE Amine Cv.pdf'><Button onClick={props.handleClick}>Ouvrez mon CV</Button></a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;