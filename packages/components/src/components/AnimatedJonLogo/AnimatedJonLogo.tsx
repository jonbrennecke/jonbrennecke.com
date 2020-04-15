import React, { useRef, useLayoutEffect, useState } from 'react';
import { trueWhite, trueBlack, lighten, opacity } from '../../styles';
import styled, { keyframes, css, Keyframes } from 'styled-components';

export enum JonLogoContentStyle {
  dark = 'dark',
  light = 'light',
}

export interface AnimatedJonLogoProps {
  contentStyle?: JonLogoContentStyle | keyof typeof JonLogoContentStyle;
  className?: string;
}

export const AnimatedJonLogo = ({
  className,
  contentStyle = JonLogoContentStyle.light,
}: AnimatedJonLogoProps) => {
  const fillColor =
    contentStyle === JonLogoContentStyle.light ? trueWhite : trueBlack;
  return (
    <svg viewBox="0 0 407 227" className={className}>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
        transform="translate(1,1)"
      >
        <AnimatedSvgGroup
          fill={fillColor}
          stroke={fillColor}
          fillRule="nonzero"
        >
          <AnimatedSvgPath d="M53.4836066,0 L70,0 C72.7614237,-5.07265313e-16 75,2.23857625 75,5 L75,150 L75,150 C75,189.168521 44.9745958,221.324233 6.68476765,224.706155 C6.27986732,224.741918 5.81716079,224.775267 5.29664808,224.806203 C2.54008817,224.970038 0.172641364,222.868218 0.0088077048,220.111658 C0.0029371951,220.012885 1.21176018e-17,219.913959 0,219.815011 L0,186.534508 C-7.03446774e-06,184.005284 1.88869981,181.874373 4.39962348,181.570677 C5.99419319,181.377813 7.28013898,181.151089 8.25746086,180.890503 C21.9101423,177.250264 31.9672131,164.799609 31.9672131,150 L31.9672131,21.5163934 C31.9672131,9.63321747 41.6004306,2.32916649e-14 53.4836066,0 Z" />
          <AnimatedSvgPath d="M165,150 C123.578644,150 90,116.421356 90,75 C90,33.5786438 123.578644,0 165,0 C206.421356,0 240,33.5786438 240,75 C240,116.421356 206.421356,150 165,150 Z M165,106.967213 C182.655004,106.967213 196.967213,92.6550043 196.967213,75 C196.967213,57.3449957 182.655004,43.0327869 165,43.0327869 C147.344996,43.0327869 133.032787,57.3449957 133.032787,75 C133.032787,92.6550043 147.344996,106.967213 165,106.967213 Z" />
          <AnimatedSvgPath d="M400,150 L383.483607,150 C371.600431,150 361.967213,140.366783 361.967213,128.483607 L361.967213,75.0075051 L361.967213,75.0075051 C361.967213,57.3507341 347.655004,43.0370931 330,43.0370931 C312.344996,43.0370931 298.032787,57.3507341 298.032787,75.0075051 L298.032787,145 C298.032787,147.761424 295.794211,150 293.032787,150 L276.516393,150 C264.633217,150 255,140.366783 255,128.483607 L255,75.0075051 L255,75.0075051 C255,33.5820039 288.578644,0 330,0 C371.421356,0 405,33.5820039 405,75.0075051 L405,145 C405,147.761424 402.761424,150 400,150 Z" />
        </AnimatedSvgGroup>
      </g>
    </svg>
  );
};

const makeFillAnimation = (fill: string = trueWhite) => keyframes`
    from {
      fill: ${opacity(fill, 0.1)};
    }

    to {
      fill: ${opacity(fill, 1)};
    }
  `;

const AnimatedSvgGroup = styled.g`
  fill: ${(props) => opacity(props.fill || trueWhite, 0.1)};
  animation: ${(props) => makeFillAnimation(props.fill)} 1.25s ease-in forwards
    1.25s;
`;

const makeDashOffsetAnimation = (max: number) =>
  keyframes`
    from {
      stroke-dashoffset: ${max};
    }

    to {
      stroke-dashoffset: 0;
    }
  `;

const StyledPath = styled.path<{ pathLength?: number }>`
  stroke-dasharray: ${(props) => (props.pathLength || 0) + 1};
  animation: ${(props) => makeDashOffsetAnimation(props.pathLength || 0)} 2s
    ease-in forwards;
`;

export const AnimatedSvgPath = (props: React.SVGProps<SVGPathElement>) => {
  const ref = useRef<SVGPathElement>();
  const [pathLength, setPathLength] = useState<number>();
  useLayoutEffect(() => {
    const totalLength = ref.current?.getTotalLength();
    setPathLength(totalLength);
  }, [ref]);
  return <StyledPath {...props} pathLength={pathLength} ref={ref as any} />;
};
