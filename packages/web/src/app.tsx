import {
  About,
  Form,
  LoadingBanner,
  unit,
  Button,
  colorToRGBA,
  trueBlack,
  trueWhite,
} from '@portfolio/components';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import styled from 'styled-components';
import aboutImageURL from '../assets/images/about_image.jpg';
import {
  CaseStudies,
  FooterSection,
  HeroSection,
  Navbar,
  ServicesSection,
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

const ContactForm = styled(Form)`
  max-width: 1024px;
  padding: ${unit * 15}px 0;
  background-color: ${trueWhite};
  border-radius: ${unit * 2}px;
  position: relative;
  width: 100%;
  max-width: 1024px;
  padding: ${unit * 15}px ${unit * 17}px;
`;

export const App = hot(() => (
  <>
    <Container>
      <Navbar />
      <HeroSection />
      <CaseStudies />
      <ServicesSection />

      <About>
        <About.TextContent>
          <About.Title>About me...</About.Title>
          <About.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </About.Body>
        </About.TextContent>
        <About.ImageContent>
          <AboutImage />
        </About.ImageContent>
      </About>

      <ContactForm>
        <Form.Title>Let's work together!</Form.Title>
        <Form.Note>
          Want to chat? Shoot me an email at{' '}
          <a href="mailto:jpbrennecke@gmail.com" target="_blank">
            jpbrennecke@gmail.com
          </a>
        </Form.Note>
        <Form.Field>
          <Form.Label>Name & Company</Form.Label>
          <Form.Input
            autoFocus={false}
            name="name"
            placeholder="John from Google..."
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>Email</Form.Label>
          <Form.Input
            autoFocus={false}
            name="email"
            placeholder="john@google.com"
          />
        </Form.Field>
        <Form.Field>
          <Form.Label>Project Description</Form.Label>
          <Form.TextArea
            autoFocus={false}
            placeholder="We need help redesigning our app..."
          />
        </Form.Field>
        <Form.Button variant="primary" size="large">
          Send
        </Form.Button>
      </ContactForm>

      <FooterSection />
    </Container>
    <LoadingBanner contentStyle="dark" />
  </>
));
