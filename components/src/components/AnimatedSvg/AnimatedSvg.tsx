import { timingFunctions } from "polished";
import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { opacity, trueWhite } from "../../styles";

const makeFillAnimation = (fill: string = trueWhite) => keyframes`
  from {
    fill: ${opacity(fill, 0.1)};
  }

  to {
    fill: ${opacity(fill, 1)};
  }
`;

const easeInOutQuad = timingFunctions("easeInOutQuad");
const easeInQuad = timingFunctions("easeInQuad");

const AnimatedSvgGroup = styled.g`
  fill: ${(props) => opacity(props.fill || trueWhite, 0.1)};
  animation: ${(props) => makeFillAnimation(props.fill)} 1.33s ${easeInQuad}
    forwards 0.66s;
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
  animation: ${(props) => makeDashOffsetAnimation(props.pathLength || 0)} 1.5s
    ${easeInOutQuad} forwards;
`;

const AnimatedSvgPath = (props: React.SVGProps<SVGPathElement>) => {
  const ref = useRef<SVGPathElement>();
  const [pathLength, setPathLength] = useState<number>();
  useEffect(() => {
    const totalLength = ref.current?.getTotalLength();
    setPathLength(totalLength);
  }, [ref]);
  return <StyledPath {...props} pathLength={pathLength} ref={ref as any} />;
};

interface AnimatedSvgSubComponents {
  Path: typeof AnimatedSvgPath;
  Group: typeof AnimatedSvgGroup;
}

export const AnimatedSvg: AnimatedSvgSubComponents = {
  Path: AnimatedSvgPath,
  Group: AnimatedSvgGroup,
};
