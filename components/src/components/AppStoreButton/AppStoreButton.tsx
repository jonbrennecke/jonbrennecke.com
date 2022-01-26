import React from 'react';
import styled from 'styled-components';
import { trueBlack, trueWhite, unit } from '../../styles';
import { Button } from '../Button';
import { Text } from '../Text';

const StyledAppleLogo = styled(AppleLogo)`
  width: 16px;
  min-width: 16px;
  margin-right: ${unit * 2}px;
  position: relative;
  top: -1px;
`;

const StyledButton = styled(Button)<{
  foregroundColor: string;
  backgroundColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.foregroundColor};
  background-color: ${(props) => props.backgroundColor};
`;

const StyledText = styled(Text)`
  font-size: 24px;
`;

interface AppStoreButtonProps {
  foregroundColor?: string;
  backgroundColor?: string;
}

export function AppStoreButton({
  foregroundColor = trueWhite,
  backgroundColor = trueBlack,
}: AppStoreButtonProps) {
  return (
    <StyledButton
      variant="primary"
      size="extraLarge"
      foregroundColor={foregroundColor}
      backgroundColor={backgroundColor}
    >
      <StyledAppleLogo />
      <StyledText color="currentColor" weight="medium">
        Download
      </StyledText>
    </StyledButton>
  );
}

function AppleLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      data-icon="apple"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 376 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M314.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C59.3 141.2 0 184.8 0 273.5c0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
      />
    </svg>
  );
}
