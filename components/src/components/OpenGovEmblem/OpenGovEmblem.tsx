import React from 'react';
import { trueWhite, trueBlack } from '../../styles';

export enum OpenGovEmblemContentStyle {
  dark = 'dark',
  light = 'light',
}

export interface OpenGovEmblemProps {
  className?: string;
  contentStyle?:
    | OpenGovEmblemContentStyle
    | keyof typeof OpenGovEmblemContentStyle;
}

export const OpenGovEmblem = ({
  className,
  contentStyle = OpenGovEmblemContentStyle.light,
}: OpenGovEmblemProps) => {
  const fillColor =
    contentStyle === OpenGovEmblemContentStyle.light ? trueWhite : trueBlack;
  return (
    <svg viewBox="0 0 245 259" className={className}>
      <defs>
        <polygon
          id="path-1"
          points="0.2052 0.136633663 341.99658 0.136633663 341.99658 341.584158 0.2052 341.584158"
        ></polygon>
      </defs>
      <g
        id="Page-Design-Exploration"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Artboard" transform="translate(-1007.000000, -921.000000)">
          <g id="opengov" transform="translate(188.000000, 901.000000)">
            <g id="Opengov" transform="translate(0.000000, 19.040888)">
              <g
                transform="translate(0.000000, 0.959112)"
                id="opengov-emblem-light"
              >
                <g transform="translate(819.000000, -83.000000)">
                  <g id="opengov-emblem-dark">
                    <g id="Group-3">
                      <mask id="mask-2" fill="white">
                        <use xlinkHref="#path-1"></use>
                      </mask>
                      <g id="Clip-2"></g>
                      <path
                        d="M171,300.918564 C99.03978,300.918564 40.7151,242.661386 40.7151,170.792079 C40.7151,98.9227723 99.03978,40.6655941 171,40.6655941 C242.9568,40.6655941 301.2849,98.9227723 301.2849,170.792079 C301.2849,242.661386 242.9568,300.918564 171,300.918564 Z M171,0 C76.55328,0 0,76.4704455 0,170.792079 C0,265.120545 76.55328,341.584158 171,341.584158 C265.43646,341.584158 341.99658,265.120545 341.99658,170.792079 C341.99658,76.4704455 265.43646,0 171,0 L171,0 Z"
                        id="Fill-1"
                        fill={fillColor}
                        mask="url(#mask-2)"
                      ></path>
                    </g>
                    <path
                      d="M245.22426,126.662822 C244.12986,124.74995 242.08812,123.585149 239.89248,123.585149 L102.1212,123.585149 C99.36468,123.585149 96.9399,125.419455 96.18066,128.070149 C95.43852,130.731089 96.56028,133.559406 98.9064,135.000891 L164.81664,175.30099 L164.81664,248.888465 C164.81664,251.692871 166.7079,254.121535 169.38576,254.845693 C169.93296,254.99599 170.46648,255.074554 171.01026,255.074554 C173.16828,255.074554 175.22712,253.923416 176.35572,251.97297 L245.22426,132.838663 C246.32892,130.922376 246.32892,128.579109 245.22426,126.662822"
                      id="Fill-4"
                      fill={fillColor}
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
