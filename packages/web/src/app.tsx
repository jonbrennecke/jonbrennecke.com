import {
  About,
  Form,
  LoadingBanner,
  unit,
  SideDrawer,
  trueWhite,
} from '@portfolio/components';
import React, { useState } from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import aboutImageURL from '../assets/images/about_image.jpg';
import {
  CaseStudies,
  FooterSection,
  HeroSection,
  Navbar,
  ServicesSection,
  ContactForm,
} from './components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

const AboutImage = styled.div`
  background-image: url(${aboutImageURL});
  background-size: cover;
`;

const ContactFormContainer = styled(Form)`
  max-width: 1024px;
  padding: ${unit * 15}px 0;
  background-color: ${trueWhite};
  border-radius: ${unit * 2}px;
  position: relative;
  width: 100%;
  max-width: 1024px;
  padding: ${unit * 15}px ${unit * 17}px;
`;

const DrawerContactFormContainer = styled(Form)`
  padding: ${unit * 10}px;
`;

export const App = hot(() => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Container>
        <SideDrawer
          open={showMenu}
          alignment="left"
          onClickOutside={() => setShowMenu(false)}
        >
          <DrawerContactFormContainer contentStyle="light">
            <ContactForm />
          </DrawerContactFormContainer>
        </SideDrawer>
        <Navbar
          onClickMenuButton={() => setShowMenu(!showMenu)}
          onClickContactButton={() => setShowMenu(!showMenu)}
        />
        <HeroSection onClickContactButton={() => setShowMenu(!showMenu)} />
        <CaseStudies />
        <ServicesSection />

        <About>
          <About.TextContent>
            <About.Title>About me...</About.Title>
            <About.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </About.Body>
          </About.TextContent>
          <About.ImageContent>
            <AboutImage />
          </About.ImageContent>
        </About>

        <ContactFormContainer contentStyle="dark">
          <ContactForm />
        </ContactFormContainer>

        <FooterSection />
      </Container>
      <LoadingBanner contentStyle="dark" />
    </>
  );
});
