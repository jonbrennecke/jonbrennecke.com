import React, { forwardRef, FC, ForwardedRef } from "react";
import styled from "styled-components";
import { unit, blue, trueBlack } from "../../styles";
import { Text } from "../Text";

const AvatarContainer = styled.div`
  display: flex;
`;

const AvatarImage = styled.img`
  object-fit: cover;
  width: 75px;
  height: 75px;
  border-radius: ${unit * 3}px;
  margin-right: ${unit * 2.5}px;
`;

const AvatarText = styled(Text)`
  color: ${blue};

  * {
    margin: ${unit * 0.5}px 0;
  }

  h1,
  h2 {
    color: ${trueBlack};
    margin-top: 0;
  }
`;

export type AvatarProps = React.HTMLProps<HTMLImageElement>;

export interface AvatarSubComponents {
  Container: typeof AvatarContainer;
  Text: typeof AvatarText;
}

// @ts-ignore
export const Avatar: FC<AvatarProps> &
  AvatarSubComponents = forwardRef(
  (props, ref: ForwardedRef<HTMLImageElement>) => (
    <AvatarImage {...props} ref={ref} />
  )
);

Avatar.Container = AvatarContainer;
Avatar.Text = AvatarText;
