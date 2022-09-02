import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <NavLink>
          <Span>Luvo Spofana</Span>
        </NavLink>
      </Link>
    </Div1>
    <Div2>
      <Link href="#projects">
        <NavLink>
          <span>Projects</span>
        </NavLink>
      </Link>
      <Link href="#tech">
        <NavLink>
          <span>Technologies</span>
        </NavLink>
      </Link>
      <Link href="#about">
        <NavLink>
          <span>About</span>
        </NavLink>
      </Link>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
