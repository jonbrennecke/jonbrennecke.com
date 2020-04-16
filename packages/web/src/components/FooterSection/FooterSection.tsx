import React from 'react';
import styled from 'styled-components';
import { Footer } from '@portfolio/components';

const StyledFooter = styled(Footer)``;

export const FooterSection = () => (
  <StyledFooter>
    <Footer.Logo />
    <Footer.FootNotes>
      <Footer.FootNote>
        © 2020 - Jon Brennecke. All Rights Reserved.
      </Footer.FootNote>
      <Footer.FootNote>
        This website is open-source on{' '}
        <a href="https://github.com/jonbrennecke" target="_blank">
          GitHub
        </a>
      </Footer.FootNote>
      <Footer.FootNote>Made with ❤ in Coeur d'Alene, Idaho</Footer.FootNote>
    </Footer.FootNotes>
  </StyledFooter>
);
