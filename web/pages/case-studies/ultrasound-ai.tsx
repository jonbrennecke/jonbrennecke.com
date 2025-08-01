import {
  blue,
  BrowserFrame,
  maxWidth,
  PhoneFrame,
  SectionHeader,
  Tag,
  Text,
  trueBlack,
  trueWhite,
  unit,
  Avatar,
} from '@portfolio/components';
import { rgba } from 'polished';
import React from 'react';
import styled from 'styled-components';
import ultrasoundAILogo from '../../../assets/images/ultrasound_ai_logomark.png';
import ultrasoundAIScreenshot from '../../../assets/images/ultrasound_ai_hero_screenshot_tablet.png';
import ultrasoundAIContentScreenshot from '../../../assets/images/ultrasound_ai_content_screenshot.png';
import { Page } from '../../src/components';

const UltrasoundAIHero = styled.div`
  display: flex;
  justify-content: center;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg, #1e293b, #334155);
    z-index: -1;
  }
`;

const UltrasoundAIHeroContentContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${unit * 20}px 0 ${unit * 20}px ${unit * 10}px;
  height: 80vh;
  max-height: 768px;
  max-width: ${maxWidth + 200}px;
`;

const StyledUltrasoundAILogo = styled.img`
  width: 100%;
  max-width: 350px;
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${unit * 2}px;
  padding: ${unit * 4}px ${unit * 4}px ${unit * 4}px 0;
`;

const Browser = styled(BrowserFrame)`
  max-height: 450px;
  max-width: 600px;
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateY(-25deg) rotateX(3deg);
  filter: drop-shadow(0px 6px 45px ${rgba(trueBlack, 0.18)});
`;

const Phone = styled(PhoneFrame)`
  min-width: 150px;
  max-width: 200px;
  width: 35%;
  position: absolute;
  transform: rotateY(-25deg) rotateX(3deg) translateZ(200px) translateY(30px);
  filter: drop-shadow(0px 6px 45px ${rgba(trueBlack, 0.18)});
`;

const BrowserScreenshot = styled.div`
  background-image: url(${ultrasoundAIScreenshot.src});
  background-size: cover;
  width: 100%;
`;

const BrowserContainer = styled.div`
  display: none;

  &:hover {
    transform: scale(1.025);
    perspective: 2500px;
    perspective-origin: 0% 50%;
  }

  @media (min-width: 768px) {
    perspective: 2500px;
    display: flex;
    flex: 1;
    align-items: flex-end;
    justify-content: flex-end;
    transition: 300ms all ease-in-out;
  }
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const BodyContentContainer = styled.div`
  width: 100%;
  background-color: ${trueWhite};
`;

const ContentBlockContainer = styled.section`
  background-color: ${trueWhite};
  padding: ${unit * 7}px ${unit * 7}px;
  width: 100%;
  max-width: ${maxWidth}px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  row-gap: ${unit * 10}px;

  &:first-of-type {
    padding-top: ${unit * 14}px;
  }

  &:last-of-type {
    padding-bottom: ${unit * 14}px;
  }

  // Desktop
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: ${unit * 10}px;
  }
`;

const ContentBlockImage = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: ${unit}px;
`;

const ColumnImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${unit}px;
`;

const BodyText = styled(Text)`
  font-size: ${unit * 3}px;

  p:first-of-type {
    margin-top: 0;
  }

  a {
    color: ${blue};
  }
`;

const StyledTagGroup = styled(Tag.Group)`
  * {
    font-weight: bold;
    font-size: 20px;
  }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  background: ${trueBlack};
  color: ${trueWhite};
  padding: ${unit * 3}px ${unit * 6}px;
  border-radius: ${unit}px;
  text-decoration: none;
  font-weight: 600;
  font-size: ${unit * 2.5}px;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 15px ${rgba(trueBlack, 0.3)};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 20px ${rgba(trueBlack, 0.4)};
  }
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: ${unit * 6}px;
  margin-bottom: ${unit * 6}px;
`;

function UltrasoundAICaseStudyPage() {
  return (
    <Page logo="jon" contentStyle="light">
      {() => (
        <>
          <UltrasoundAIHero>
            <UltrasoundAIHeroContentContainer>
              <LogoContainer>
                <StyledUltrasoundAILogo src={ultrasoundAILogo.src} />
                <StyledTagGroup>
                  <Tag>AI</Tag>
                  <Tag>Healthcare</Tag>
                  <Tag>Machine Learning</Tag>
                </StyledTagGroup>
              </LogoContainer>
              <BrowserContainer>
                <Browser>
                  <BrowserScreenshot />
                </Browser>
                <Phone>
                  <image
                    mask="url(#mask-10)"
                    x="3"
                    y="6"
                    width="746"
                    href={ultrasoundAIScreenshot.src}
                  />
                </Phone>
              </BrowserContainer>
            </UltrasoundAIHeroContentContainer>
          </UltrasoundAIHero>
          <BodyContentContainer>
            <ContentBlockContainer>
              <Column>
                <Avatar.Container>
                  <Avatar src="https://github.com/jonbrennecke.png" />
                  <Avatar.Text>
                    <h2>Jon Brennecke</h2>
                    <p>
                      <strong>Founder & Lead Developer</strong>
                    </p>
                    <p>Ultrasound AI</p>
                  </Avatar.Text>
                </Avatar.Container>
              </Column>
              <Column>
                <BodyText>
                  <p>
                    When my wife and I received our first ultrasound photos of
                    our daughter, I was struck by how difficult it was to make
                    out her features through the grainy, blurry images. Like
                    most expecting parents, I wanted to see what our baby would
                    actually look like.
                  </p>
                  <p>
                    This personal experience led me to create{' '}
                    <a
                      href="https://aiultrasoundphotos.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ultrasound AI
                    </a>
                    , an AI-powered service that transforms 3D ultrasound scans
                    into lifelike baby portraits.
                  </p>
                  <p>
                    To date, thousands of expecting parents have used Ultrasound
                    AI to get a preview of their baby's features, creating
                    meaningful connections with their unborn children.
                  </p>
                </BodyText>
              </Column>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <ContentBlockImage src={ultrasoundAIContentScreenshot.src} />
            </ContentBlockContainer>
            <ContentBlockContainer>
              <BodyText>
                <p>
                  Ultrasound AI uses advanced machine learning models to analyze
                  3D ultrasound images and generate photorealistic baby
                  portraits. The technology combines computer vision, deep
                  learning, and generative AI to create images that show what a
                  baby might look like based on their ultrasound features.
                </p>
                <p>
                  The platform processes thousands of ultrasound images daily,
                  learning from each enhancement to improve accuracy and
                  realism. Users can upload their 3D ultrasound scans and
                  receive high-quality baby portraits in minutes.
                </p>
                <p>
                  The service has been particularly valuable for parents who
                  want to share more realistic images with family and friends,
                  or for those who simply want to better visualize their unborn
                  child.
                </p>
              </BodyText>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <SectionHeader>
                <SectionHeader.SubTitle>
                  AI-Powered Baby Imaging
                </SectionHeader.SubTitle>
                <SectionHeader.Title>Technology</SectionHeader.Title>
                <SectionHeader.Paragraph>
                  Advanced machine learning models transform ultrasound scans
                  into lifelike baby portraits.
                </SectionHeader.Paragraph>
              </SectionHeader>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <Column>
                <BodyText>
                  <p>
                    The core technology behind Ultrasound AI involves
                    sophisticated neural networks trained on millions of
                    ultrasound and baby portrait pairs. The system analyzes
                    facial features, skin tone, and other characteristics from
                    the 3D ultrasound data to generate realistic baby images.
                  </p>
                  <p>
                    The platform offers multiple enhancement options, from basic
                    image improvements to full photorealistic baby portraits.
                    Users can choose different styles and variations, and the AI
                    generates multiple options for each ultrasound scan.
                  </p>
                  <p>
                    Privacy and security are paramount - all uploaded images are
                    processed securely and deleted after enhancement. The
                    service complies with healthcare data protection standards
                    and maintains strict confidentiality protocols.
                  </p>
                </BodyText>
              </Column>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <SectionHeader>
                <SectionHeader.SubTitle>
                  Parental Connection
                </SectionHeader.SubTitle>
                <SectionHeader.Title>Impact & Growth</SectionHeader.Title>
                <SectionHeader.Paragraph>
                  Helping thousands of parents connect with their unborn
                  children through AI-enhanced imaging.
                </SectionHeader.Paragraph>
              </SectionHeader>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <BodyText>
                <p>
                  Since its launch, Ultrasound AI has processed over 50,000
                  ultrasound scans and generated baby portraits for families
                  around the world. The service has received overwhelmingly
                  positive feedback from parents who appreciate the opportunity
                  to see more realistic images of their unborn children.
                </p>
                <p>
                  The platform has been featured in parenting blogs, medical
                  forums, and social media, with many users sharing their
                  before-and-after results. The technology has been particularly
                  valuable for parents who want to share more meaningful images
                  with family and friends during their pregnancy journey.
                </p>
                <p>
                  Looking forward, Ultrasound AI continues to improve its AI
                  models and expand its capabilities. The goal is to make this
                  technology accessible to even more expecting parents, helping
                  them create stronger emotional connections with their unborn
                  children through enhanced imaging technology.
                </p>
              </BodyText>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <CTAContainer>
                <CTAButton
                  href="https://aiultrasoundphotos.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Try Ultrasound AI Today →
                </CTAButton>
              </CTAContainer>
            </ContentBlockContainer>
          </BodyContentContainer>
        </>
      )}
    </Page>
  );
}

export default UltrasoundAICaseStudyPage;
