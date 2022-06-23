import React from 'react';
import { AiFillGithub, AiFillTwitterSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return ( <
        FooterWrapper >
        <
        LinkList >
        <
        LinkColumn >

        <
        LinkTitle > Email: < /LinkTitle> <
        LinkItem href = "mailto:dadsonkojoduke@gmail.com" >
        dadsonkojoduke @gmail.com <
        /LinkItem> < /
        LinkColumn > <
        /LinkList> <
        SocialIconsContainer >
        <
        CompanyContainer >
        <
        Slogan > Innovating one project at a time < /Slogan> < /
        CompanyContainer > <
        SocialContainer >
        <
        SocialIcons href = "https://github.com/DD-code1" >
        <
        AiFillGithub size = "3rem" / >
        <
        /SocialIcons> <
        SocialIcons href = "https://linkedin.com/in/duke-dadson-141660127/" >
        <
        AiFillLinkedin size = "3rem" / >
        <
        /SocialIcons> <
        SocialIcons href = "https://twitter.com/TrippyDuke" >
        <
        AiFillTwitterSquare size = "3rem" / >
        <
        /
        SocialIcons > < /
        SocialContainer > <
        /SocialIconsContainer> < /
        FooterWrapper >
    );
};

export default Footer;