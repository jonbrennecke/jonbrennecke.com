import {
  ContentStyle,
  Form,
  LoadingBanner,
  LoadingBannerLogoVariant,
  SideDrawer,
  unit,
} from '@portfolio/components';
import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import site from '../seo/site.json';
import { RelatedProjects } from './RelatedProjects';
import { ContactForm, FooterSection, Navbar } from '.';

const Container = styled.div`
  & > * {
    width: 100%;
    margin: 0 auto;
  }
`;

const DrawerContactFormContainer = styled(Form)`
  padding: ${unit * 10}px;
`;

export function Page({
  path,
  contentStyle,
  children,
  logo = LoadingBannerLogoVariant.jon,
  showLoadingBanner = true,
}: {
  path: keyof typeof site.pages;
  logo?: LoadingBannerLogoVariant | keyof typeof LoadingBannerLogoVariant;
  contentStyle?: ContentStyle | keyof typeof ContentStyle;
  showLoadingBanner?: boolean;
  children: (params: { showMenu(): void }) => React.ReactNode;
}) {
  const seo = site.pages[path];
  const canonicalUrl = new URL(path, site.origin).href;
  const socialImageUrl = new URL(seo.socialImage, site.origin).href;
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta name="description" content={seo.description} key="description" />
        <meta property="og:title" content={seo.title} key="og:title" />
        <meta property="og:description" content={seo.description} key="og:description" />
        <meta property="og:url" content={canonicalUrl} key="og:url" />
        <meta property="og:type" content={seo.socialType} key="og:type" />
        <meta property="og:image" content={socialImageUrl} key="og:image" />
        <meta property="og:image:alt" content={seo.socialImageAlt} key="og:image:alt" />
        <meta property="og:image:width" content="1200" key="og:image:width" />
        <meta property="og:image:height" content="630" key="og:image:height" />
        <meta name="twitter:card" content="summary_large_image" key="twitter:card" />
        <meta name="twitter:title" content={seo.title} key="twitter:title" />
        <meta name="twitter:description" content={seo.description} key="twitter:description" />
        <meta name="twitter:image" content={socialImageUrl} key="twitter:image" />
        <meta name="twitter:image:alt" content={seo.socialImageAlt} key="twitter:image:alt" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
          contentStyle={contentStyle}
          onClickMenuButton={() => setShowMenu(!showMenu)}
          onClickContactButton={() => setShowMenu(!showMenu)}
        />
        {children({
          showMenu: () => setShowMenu(!showMenu),
        })}
        {path.startsWith('/case-studies/') && <RelatedProjects currentPath={path} />}
        <FooterSection />
      </Container>
      {showLoadingBanner && <LoadingBanner logo={logo} contentStyle="dark" />}
    </>
  );
}
