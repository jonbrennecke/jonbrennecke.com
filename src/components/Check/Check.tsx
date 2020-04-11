import React from 'react';
import { trueWhite } from '../../styles';

export interface CheckProps {
  checkColor?: string;
  backgroundColor?: string;
}

export const Check = ({
  checkColor = trueWhite,
  backgroundColor = '#24474A'
}: CheckProps) => (
  <svg width="38px" height="38px" viewBox="0 0 38 38">
    <g
      id="Page-Design-Exploration"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="Artboard" transform="translate(-410.000000, -837.000000)">
        <g id="Checkmark" transform="translate(410.000000, 837.000000)">
          <g id="Group-2">
            <circle
              id="Oval"
              fill={backgroundColor}
              cx="19"
              cy="19"
              r="19"
            ></circle>
            <polyline
              id="Path-2"
              stroke={checkColor}
              strokeWidth="2.85"
              transform="translate(19.000000, 16.367641) rotate(45.000000) translate(-19.000000, -16.367641) "
              points="14.8669434 24.2234155 23.1330566 24.2234155 23.1330566 8.51186622"
            ></polyline>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
