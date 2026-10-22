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
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta name="description" content={seo.description} key="description" />
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
