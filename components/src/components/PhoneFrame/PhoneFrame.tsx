import React from "react";

export interface PhoneFrameProps {
  className?: string;
  children?: React.SVGProps<SVGGElement>["children"];
}

export const PhoneFrame = ({ className, children }: PhoneFrameProps) => (
  <svg
    className={className}
    viewBox="0 0 1054 1651"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <linearGradient
        x1="0%"
        y1="38.6487889%"
        x2="100%"
        y2="61.3512111%"
        id="linearGradient-1"
      >
        <stop stopColor="#FFFFFF" offset="0%"></stop>
        <stop stopColor="#FEFEFE" offset="100%"></stop>
      </linearGradient>
      <path
        d="M23,513 C26.8659932,513 30,516.134007 30,520 L30,628 C30,631.865993 26.8659932,635 23,635 L7,635 C3.13400675,635 4.73447626e-16,631.865993 0,628 L0,520 C-4.73447626e-16,516.134007 3.13400675,513 7,513 L23,513 Z M843,357 C846.865993,357 850,360.134007 850,364 L850,472 C850,475.865993 846.865993,479 843,479 L827,479 C823.134007,479 820,475.865993 820,472 L820,364 C820,360.134007 823.134007,357 827,357 L843,357 Z M23,357 C26.8659932,357 30,360.134007 30,364 L30,472 C30,475.865993 26.8659932,479 23,479 L7,479 C3.13400675,479 4.73447626e-16,475.865993 0,472 L0,364 C-4.73447626e-16,360.134007 3.13400675,357 7,357 L23,357 Z M23,230 C26.8659932,230 30,233.134007 30,237 L30,291 C30,294.865993 26.8659932,298 23,298 L7,298 C3.13400675,298 4.73447626e-16,294.865993 0,291 L0,237 C-4.73447626e-16,233.134007 3.13400675,230 7,230 L23,230 Z"
        id="path-2"
      ></path>
      <filter
        x="-24.7%"
        y="-38.5%"
        width="149.4%"
        height="203.7%"
        filterUnits="objectBoundingBox"
        id="filter-3"
      >
        <feMorphology
          radius="3"
          operator="dilate"
          in="SourceAlpha"
          result="shadowSpreadOuter1"
        ></feMorphology>
        <feOffset
          dx="0"
          dy="54"
          in="shadowSpreadOuter1"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="60"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feComposite
          in="shadowBlurOuter1"
          in2="SourceAlpha"
          operator="out"
          result="shadowBlurOuter1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.132840806 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
      <path
        d="M140.19426,-5.17920154e-15 L699.80574,5.17920154e-15 C744.381677,-3.00926524e-15 760.545989,4.64128056 776.842285,13.3566352 C793.138581,22.0719898 805.92801,34.8614185 814.643365,51.1577148 C823.358719,67.4540111 828,83.618323 828,128.19426 L828,1516.80574 C828,1561.38168 823.358719,1577.54599 814.643365,1593.84229 C805.92801,1610.13858 793.138581,1622.92801 776.842285,1631.64336 C760.545989,1640.35872 744.381677,1645 699.80574,1645 L140.19426,1645 C95.618323,1645 79.4540111,1640.35872 63.1577148,1631.64336 C46.8614185,1622.92801 34.0719898,1610.13858 25.3566352,1593.84229 C16.6412806,1577.54599 12,1561.38168 12,1516.80574 L12,128.19426 C12,83.618323 16.6412806,67.4540111 25.3566352,51.1577148 C34.0719898,34.8614185 46.8614185,22.0719898 63.1577148,13.3566352 C79.4540111,4.64128056 95.618323,3.00926524e-15 140.19426,-5.17920154e-15 Z"
        id="path-4"
      ></path>
      <filter
        x="-1.0%"
        y="-0.5%"
        width="102.1%"
        height="101.0%"
        filterUnits="objectBoundingBox"
        id="filter-5"
      >
        <feGaussianBlur
          stdDeviation="5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="0"
          dy="-2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0.9506   0 0 0 0 0.96334   0 0 0 0 0.98  0 0 0 1 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
      <path
        d="M437,1616 C462.957383,1616 484,1593.8381 484,1566.5 C484,1539.1619 462.957383,1517 437,1517 C411.042617,1517 390,1539.1619 390,1566.5 C390,1593.8381 411.042617,1616 437,1616 Z"
        id="path-6"
      ></path>
      <filter
        x="-22.3%"
        y="-21.2%"
        width="144.7%"
        height="142.4%"
        filterUnits="objectBoundingBox"
        id="filter-7"
      >
        <feOffset
          dx="0"
          dy="0"
          in="SourceAlpha"
          result="shadowOffsetOuter1"
        ></feOffset>
        <feGaussianBlur
          stdDeviation="7"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        ></feGaussianBlur>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.187216938 0"
          type="matrix"
          in="shadowBlurOuter1"
        ></feColorMatrix>
      </filter>
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-8">
        <stop stopColor="#D1D1D3" offset="0%"></stop>
        <stop stopColor="#FCFDFF" offset="100%"></stop>
      </linearGradient>
      <path
        d="M10,0 L740,0 C745.522847,-1.01453063e-15 750,4.4771525 750,10 L750,1326 C750,1331.52285 745.522847,1336 740,1336 L10,1336 C4.4771525,1336 6.76353751e-16,1331.52285 0,1326 L0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z"
        id="path-9"
      ></path>
      <ellipse
        id="path-11"
        cx="7.07920792"
        cy="6.5"
        rx="7.07920792"
        ry="6.5"
      ></ellipse>
      <filter
        x="-31.8%"
        y="-34.6%"
        width="163.6%"
        height="169.2%"
        filterUnits="objectBoundingBox"
        id="filter-12"
      >
        <feGaussianBlur
          stdDeviation="2.5"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="-2"
          dy="-2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.344061368 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
      <path
        d="M36.6732673,3 L106,3 C108.209139,3 110,4.790861 110,7 C110,9.209139 108.209139,11 106,11 L36.6732673,11 C34.4641283,11 32.6732673,9.209139 32.6732673,7 C32.6732673,4.790861 34.4641283,3 36.6732673,3 Z"
        id="path-13"
      ></path>
      <filter
        x="-5.2%"
        y="-50.0%"
        width="110.3%"
        height="200.0%"
        filterUnits="objectBoundingBox"
        id="filter-14"
      >
        <feGaussianBlur
          stdDeviation="2"
          in="SourceAlpha"
          result="shadowBlurInner1"
        ></feGaussianBlur>
        <feOffset
          dx="2"
          dy="2"
          in="shadowBlurInner1"
          result="shadowOffsetInner1"
        ></feOffset>
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          operator="arithmetic"
          k2="-1"
          k3="1"
          result="shadowInnerInner1"
        ></feComposite>
        <feColorMatrix
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.344061368 0"
          type="matrix"
          in="shadowInnerInner1"
        ></feColorMatrix>
      </filter>
    </defs>
    <g
      id="Symbols"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <g id="iPhone-8" transform="translate(19.000000, -54.000000)">
        <g transform="translate(83.000000, 57.000000)">
          <g id="Buttons">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-3)"
              xlinkHref="#path-2"
            ></use>
            <path
              strokeOpacity="0.04"
              stroke="#000000"
              strokeWidth="3"
              d="M23,511.5 C27.6944204,511.5 31.5,515.30558 31.5,520 L31.5,628 C31.5,632.69442 27.6944204,636.5 23,636.5 L7,636.5 C2.30557963,636.5 -1.5,632.69442 -1.5,628 L-1.5,520 C-1.5,515.30558 2.30557963,511.5 7,511.5 L23,511.5 Z M843,355.5 C847.69442,355.5 851.5,359.30558 851.5,364 L851.5,472 C851.5,476.69442 847.69442,480.5 843,480.5 L827,480.5 C822.30558,480.5 818.5,476.69442 818.5,472 L818.5,364 C818.5,359.30558 822.30558,355.5 827,355.5 L843,355.5 Z M23,355.5 C27.6944204,355.5 31.5,359.30558 31.5,364 L31.5,472 C31.5,476.69442 27.6944204,480.5 23,480.5 L7,480.5 C2.30557963,480.5 -1.5,476.69442 -1.5,472 L-1.5,364 C-1.5,359.30558 2.30557963,355.5 7,355.5 L23,355.5 Z M23,228.5 C27.6944204,228.5 31.5,232.30558 31.5,237 L31.5,291 C31.5,295.69442 27.6944204,299.5 23,299.5 L7,299.5 C2.30557963,299.5 -1.5,295.69442 -1.5,291 L-1.5,237 C-1.5,232.30558 2.30557963,228.5 7,228.5 L23,228.5 Z"
              fill="url(#linearGradient-1)"
              fillRule="evenodd"
            ></path>
          </g>
          <g id="Outer_Body">
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-4"></use>
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-5)"
              xlinkHref="#path-4"
            ></use>
            <use
              strokeOpacity="0.03"
              stroke="#000000"
              strokeWidth="5"
              xlinkHref="#path-4"
            ></use>
          </g>
          <g id="home">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-7)"
              xlinkHref="#path-6"
            ></use>
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-6"></use>
          </g>
          <path
            d="M425,58 C429.418278,58 433,53.9705627 433,49 C433,44.0294373 429.418278,40 425,40 C420.581722,40 417,44.0294373 417,49 C417,53.9705627 420.581722,58 425,58 Z"
            id="camera"
            fill="url(#linearGradient-8)"
          ></path>
          <g
            id="iPhone8_Wallpaper"
            transform="translate(45.000000, 153.000000)"
          >
            <g id="Bitmap" strokeWidth="1" fillRule="evenodd">
              <mask id="mask-10" fill="white">
                <use xlinkHref="#path-9"></use>
              </mask>
            </g>
            {children}
            <path
              d="M10,3 C6.13400675,3 3,6.13400675 3,10 L3,1326 C3,1329.86599 6.13400675,1333 10,1333 L740,1333 C743.865993,1333 747,1329.86599 747,1326 L747,10 C747,6.13400675 743.865993,3 740,3 L10,3 Z"
              id="Rectangle"
              stroke="#212121"
              strokeWidth="6"
            ></path>
          </g>
          <g
            id="sensor-camera-copy"
            opacity="0.6"
            transform="translate(360.000000, 76.000000)"
          >
            <g id="Group" opacity="0.75">
              <g id="Oval">
                <use
                  fill="#BFC0C5"
                  fillRule="evenodd"
                  xlinkHref="#path-11"
                ></use>
                <use
                  fill="black"
                  fillOpacity="1"
                  filter="url(#filter-12)"
                  xlinkHref="#path-11"
                ></use>
                <ellipse
                  strokeOpacity="0.568331069"
                  stroke="#7D7D7D"
                  strokeWidth="1"
                  cx="7.07920792"
                  cy="6.5"
                  rx="7.57920792"
                  ry="7"
                ></ellipse>
              </g>
            </g>
            <g id="Rectangle-2">
              <use fill="#BFC0C5" fillRule="evenodd" xlinkHref="#path-13"></use>
              <use
                fill="black"
                fillOpacity="1"
                filter="url(#filter-14)"
                xlinkHref="#path-13"
              ></use>
              <path
                strokeOpacity="0.568331069"
                stroke="#7D7D7D"
                strokeWidth="1"
                d="M36.6732673,2.5 L106,2.5 C108.485281,2.5 110.5,4.51471863 110.5,7 C110.5,9.48528137 108.485281,11.5 106,11.5 L36.6732673,11.5 C34.187986,11.5 32.1732673,9.48528137 32.1732673,7 C32.1732673,4.51471863 34.187986,2.5 36.6732673,2.5 Z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
