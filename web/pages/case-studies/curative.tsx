import {
  blue,
  BrowserFrame,
  curativeBlue30,
  curativeBlue50,
  CurativeLogo,
  maxWidth,
  PhoneFrame,
  SectionHeader,
  Tag,
  Text,
  trueBlack,
  trueWhite,
  unit,
  Avatar,
} from "@portfolio/components";
import { rgba } from "polished";
import React from "react";
import styled from "styled-components";
import iPhoneBrowserScreenshot from "../../assets/images/book.curative.com.iPhone.png";
import browserScreenshot from "../../assets/images/book.curative.com.png";
import curativeDriveThruSiteImage from "../../assets/images/curative-drive-thru-site.jpeg";
import curativeVanImage from "../../assets/images/curative-van.png";
import { Page } from "../../src/components";

const CurativeHero = styled.div`
  display: flex;
  justify-content: center;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(-35deg, ${curativeBlue50}, ${curativeBlue30});
    z-index: -1;
  }
`;

const CurativeHeroContentContainer = styled.div`
  display: flex;
  flex: 1;
  padding: ${unit * 20}px 0 ${unit * 20}px ${unit * 10}px;
  height: 80vh;
  max-height: 768px;
  max-width: ${maxWidth + 200}px;
`;

const StyledCurativeLogo = styled(CurativeLogo)`
  width: 100%;
  max-width: 350px;
`;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: ${unit * 2}px;
  padding: ${unit * 4}px 0;
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
  max-width: 200px;
  width: 35%;
  position: absolute;
  transform: rotateY(-25deg) rotateX(3deg) translateZ(200px) translateY(30px);
  filter: drop-shadow(0px 6px 45px ${rgba(trueBlack, 0.18)});
`;

const BrowserScreenshot = styled.div`
  background-image: url(${browserScreenshot.src});
  background-size: cover;
  width: 100%;
`;

const BrowserContainer = styled.div`
  perspective: 2500px;
  display: flex;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  transition: 300ms all ease-in-out;

  &:hover {
    transform: scale(1.025);
    perspective: 2500px;
    perspective-origin: 0% 50%;
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
  column-gap: ${unit * 10}px;

  &:first-of-type {
    padding-top: ${unit * 14}px;
  }

  &:last-of-type {
    padding-bottom: ${unit * 14}px;
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

function CurativeCaseStudyPage() {
  return (
    <Page logo="curative" contentStyle="light">
      {() => (
        <>
          <CurativeHero>
            <CurativeHeroContentContainer>
              <LogoContainer>
                <StyledCurativeLogo id="curativeLogo" contentStyle="light" />
                <StyledTagGroup>
                  <Tag>COVID-19 Testing</Tag>
                  <Tag>Medical Diagnostics</Tag>
                  <Tag>Healthcare</Tag>
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
                    href={iPhoneBrowserScreenshot.src}
                  />
                </Phone>
              </BrowserContainer>
            </CurativeHeroContentContainer>
          </CurativeHero>
          <BodyContentContainer>
            <ContentBlockContainer>
              <Column>
                <Avatar.Container>
                  <Avatar src="https://github.com/jonbrennecke.png" />
                  <Avatar.Text>
                    <h2>Jon Brennecke</h2>
                    <p>
                      <strong>Senior Fullstack Software Engineer</strong>
                    </p>
                    <p>Team Lead, Patient Experience Team</p>
                  </Avatar.Text>
                </Avatar.Container>
              </Column>
              <Column>
                <BodyText>
                  <p>
                    I joined Curative in the spring of 2020, just as the
                    COVID-19 pandemic was starting to spread across the globe.
                  </p>
                  <p>
                    As an early employee, I saw Curative scale up from a lab in
                    LA to a national presence. To date, Curative has delivered
                    over 25 million COVID-19 tests and 2 million vaccinations.
                  </p>
                  <p>
                    Some of the most impactful work of my career has been at
                    Curative. And with the rest of the team there, I've launched
                    software to millions of users.
                  </p>
                </BodyText>
              </Column>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <ContentBlockImage src={curativeDriveThruSiteImage.src} />
            </ContentBlockContainer>
            <ContentBlockContainer>
              <BodyText>
                <p>
                  I led the Patient Experience Team to build Scheduler, the
                  appointment booking platform on{" "}
                  <a href="https://curative.com" target="_blank">
                    curative.com
                  </a>
                  .
                </p>
                <p>
                  Before Scheduler, Curative had been signing up patients with a
                  quickly-built webapp. This didn't scale well, as demand for
                  COVID-19 testing exploded in the height of the pandemic.
                </p>
                <p>
                  I formed an engineering team and built the new Scheduler, a
                  greenfield app using a modern React stack. The new Scheduler
                  allowed Curative to expand operations to thousands of
                  locations around the US.
                </p>
              </BodyText>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <SectionHeader>
                <SectionHeader.SubTitle>
                  Software for COVID-19
                </SectionHeader.SubTitle>
                <SectionHeader.Title>Vaccines</SectionHeader.Title>
                <SectionHeader.Paragraph>
                  Curative has delivered over 25 million COVID-19 tests and 2
                  million vaccinations.
                </SectionHeader.Paragraph>
              </SectionHeader>
            </ContentBlockContainer>
            <ContentBlockContainer>
              <Column>
                <BodyText>
                  <p>
                    When vaccines for COVID-19 were about to hit the market in
                    early 2021, Curative was among the first to build
                    specialized software for recording vaccinations.{" "}
                  </p>
                  <p>
                    I built the early prototypes of the internal tools used by
                    Curative’s nurses and staff to record vaccinations. I also
                    led the Patient Experience Team in building support for
                    COVID-19 vaccinations into our software. Soon, the public
                    could book appointments for COVID-19 vaccines on our public{" "}
                    <a href="https://curative.com" target="_blank">
                      curative.com
                    </a>{" "}
                    platform.
                  </p>
                  <p>
                    Curative partnered with LA County, Massachusetts state and
                    other local governments to run large-scale drive-thru
                    vaccination sites. To date, Curative has delivered over 2M
                    vaccinations through the administration software that I
                    helped build.
                  </p>
                </BodyText>
              </Column>
              <Column>
                <ColumnImage src={curativeVanImage.src} />
              </Column>
            </ContentBlockContainer>
          </BodyContentContainer>
        </>
      )}
    </Page>
  );
}

export default CurativeCaseStudyPage;
