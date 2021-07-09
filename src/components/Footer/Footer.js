import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:9131972566'>9131972566</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailto:khakharia.ayush20@gmail.com'>khakharia.ayush20@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>The best way to prepare is to write programs and to study great programs that other people have written.</Slogan>
        </CompanyContainer>

        <SocialIcons href='https://github.com/ayush200998'>
          <AiFillGithub size='4rem' />
        </SocialIcons>

        <SocialIcons href='https://www.linkedin.com/in/ayush-khakharia-79aa84167/'>
          <AiFillLinkedin size='4rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
