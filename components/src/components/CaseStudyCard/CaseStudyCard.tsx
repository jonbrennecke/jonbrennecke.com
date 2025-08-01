import React from 'react';
import styled, { css } from 'styled-components';
import { colorToRGBA, trueBlack, trueWhite, unit } from '../../styles';
import { Heading } from '../Heading';
import { Tag } from '../Tag';
import { Text } from '../Text';
import { ViewButton } from '../ViewButton';

export interface CaseStudyCardProps {
  className?: string;
  children?: React.ReactChild | React.ReactChild[];
}

const Logo = styled.div`
  height: ${unit * 7}px;
  padding-bottom: ${unit * 3}px;
  box-sizing: content-box;

  & > * {
    height: 100%;
  }
`;

const Title = styled(Heading)`
  font-size: ${unit * 4}px;
  color: ${trueWhite};
  line-clamp: 3;
  -webkit-line-clamp: 3;
  box-orient: vertical;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  display: -moz-box;
  white-space: normal;
`;

const Body = styled(Text)`
  font-size: ${unit * 2}px;
  color: ${trueWhite};
`;

interface ViewCaseStudyButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const ViewCaseStudyButtonContainer = styled.div<{
  variant: 'primary' | 'secondary';
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-end;
  cursor: pointer;
  transition: 200ms opacity ease-in-out;

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    `}
`;

const ViewCaseStudyButtonInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ViewCaseStudyButtonText = styled(Text)<{
  variant: 'primary' | 'secondary';
}>`
  color: ${trueWhite};
  padding-bottom: ${unit * 0.5}px;
  display: inline-block;

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      font-size: ${unit * 1.8}px;
    `}
`;

const ViewCaseStudyButtonArrow = styled.div<{
  variant: 'primary' | 'secondary';
}>`
  width: 0.75em;
  margin-left: 0.28em;
  margin-bottom: 0.2em;
  transition: 200ms transform ease-in-out;

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      width: 0.65em;
    `}

  svg {
    width: 100%;
    height: auto;
  }
`;

const ViewCaseStudyButtonUnderline = styled.div<{
  variant: 'primary' | 'secondary';
}>`
  position: absolute;
  top: 100%;
  width: 100%;
  left: 0;
  right: 0;
  height: 1px;
  background-color: ${trueWhite};

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      opacity: 0.8;
    `}
`;

const ViewCaseStudyButtonComponent: React.FC<ViewCaseStudyButtonProps> = ({
  variant = 'primary',
  children,
  className,
  href,
  target,
  rel,
}) => {
  const content = (
    <ViewCaseStudyButtonContainer variant={variant} className={className}>
      <ViewCaseStudyButtonInner>
        <ViewCaseStudyButtonText variant={variant}>
          {children}
        </ViewCaseStudyButtonText>
        <ViewCaseStudyButtonArrow variant={variant}>
          <svg viewBox="0 0 102 85">
            <g
              id="Symbols"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Artboard"
                transform="translate(-59.000000, -51.000000)"
                fill="#FFFFFF"
              >
                <g id="Group" transform="translate(59.000000, 51.000000)">
                  <polygon
                    id="Path"
                    points="73.4063316 34.9869901 0 34.9869901 0 50.0130092 73.4063316 50.0130092 49.1877684 74.3749997 59.7502177 85 102 42.4999996 96.7187753 37.1875002 59.7502177 0 49.1877684 10.6250003"
                  ></polygon>
                </g>
              </g>
            </g>
          </svg>
        </ViewCaseStudyButtonArrow>
        <ViewCaseStudyButtonUnderline variant={variant} />
      </ViewCaseStudyButtonInner>
    </ViewCaseStudyButtonContainer>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return content;
};

const borderShadowCss = css`
  filter: drop-shadow(0px 6px 45px ${colorToRGBA(trueBlack, 0.06)});
`;

const darkerBorderShadowCss = css`
  filter: drop-shadow(0px 6px 45px ${colorToRGBA(trueBlack, 0.18)});
`;

const ImageContent = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    width: 100%;
    min-height: 450px;
    transition: 250ms transform ease-in-out, 250ms filter ease-in-out;
    ${borderShadowCss}
  }

  & > * {
    position: absolute;
    top: 50%;
    bottom: 0;
    width: 100%;
    max-height: 100%;
    transform: translateY(-50%);
  }

  &:first-child {
    transform: rotateY(7deg) rotateX(-5deg);
  }

  &:not(:first-child) {
    transform: rotateY(-14deg) rotateX(8deg);
  }
`;

const TextContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  row-gap: ${unit}px;
  flex: 1;
  max-height: 100%;

  @media (min-width: 1024px) {
    row-gap: ${unit * 3}px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  column-gap: ${unit * 7}px;
  perspective: 1500px;
  border-radius: ${unit}px;
  padding: ${unit * 5}px;
  height: 525px;

  &:hover {
    ${ImageContent}:first-child {
      ${darkerBorderShadowCss}
      transform: rotateY(18deg) rotateX(7deg) scale(1.07);
    }

    ${ImageContent}:not(:first-child) {
      ${darkerBorderShadowCss}
      transform: rotateY(-18deg) rotateX(12deg) scale(1.10);
    }
  }

  & > ${Title} {
    margin-top: ${unit * 3}px;
  }

  & > ${Body} {
    margin-top: ${unit * 3}px;
  }

  & ${Tag.Group} span {
    font-size: ${unit * 2}px;
  }

  @media (min-width: 1024px) {
    padding: ${unit * 5}px ${unit * 7}px;
  }
`;

export interface CaseStudyCardSubComponents {
  Logo: typeof Logo;
  Title: typeof Title;
  Body: typeof Body;
  Tags: typeof Tag.Group;
  ImageContent: typeof ImageContent;
  TextContent: typeof TextContent;
  ViewCaseStudyButton: typeof ViewCaseStudyButtonComponent;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> &
  CaseStudyCardSubComponents = ({
  className,
  children,
}: CaseStudyCardProps) => (
  <Container className={className}>{children}</Container>
);

CaseStudyCard.Logo = Logo;
CaseStudyCard.Title = Title;
CaseStudyCard.Body = Body;
CaseStudyCard.Tags = Tag.Group;
CaseStudyCard.ImageContent = ImageContent;
CaseStudyCard.TextContent = TextContent;
CaseStudyCard.ViewCaseStudyButton = ViewCaseStudyButtonComponent;
