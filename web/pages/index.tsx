import {
  About,
  Form,
  LoadingBanner,
  SideDrawer,
  trueWhite,
  unit,
} from '@portfolio/components';
import React, { useState } from 'react';
import styled from 'styled-components';
import aboutImageURL from '../assets/images/about_image.jpg';
import {
  CaseStudies,
  ContactForm,
  FooterSection,
  HeroSection,
  Navbar,
  ServicesSection,
} from '../src/components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

const AboutImage = styled.div`
  background-image: url(${aboutImageURL.src});
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

function App() {
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
            <About.Title>Hi, I'm Jon</About.Title>
            <About.Body>
              I build and consult on mobile apps and websites. I have also made
              a few independently-developed apps like{' '}
              <a
                href="https://apps.apple.com/us/app/boca-portrait-mode-videos/id1478361742"
                target="_blank"
              >
                “BOCA”
              </a>{' '}
              and{' '}
              <a
                href="https://apps.apple.com/us/app/caption-this-video-subtitles/id1449087035"
                target="_blank"
              >
                "Caption This”
              </a>
              .
            </About.Body>
            &nbsp;
            <About.Body>
              I have been building apps in React and React Native since both
              platforms were first announced. In that time, I have worked as a
              consultant and full-time employee for many agencies and startups.
              I have also worked alongside well-known design consultancies and
              product studios.
            </About.Body>
            &nbsp;
            <About.Body>
              I am experienced in turning design deliverables into pixel-perfect
              user interfaces. I can hit the ground running on any project,
              whether as an individual contributor or technical leader.
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
}

export default App;
