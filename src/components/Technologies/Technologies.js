import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section>
    <SectionDivider/>
    <SectionTitle>
      Technologies
    </SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-end to Back-end.    
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='4rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='4rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Django
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size='4rem'/>
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with <br />
            MongoDB and Firestore
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
