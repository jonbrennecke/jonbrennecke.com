import React from 'react';
import styled from 'styled-components';
import { unit } from '../../styles';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { PhoneIcon, ServersIcon, WebDevIcon } from './icons';

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
`;

const ListItemContainer = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: min-content 1fr 1fr 1fr;
  grid-template-areas:
    'icon title title title'
    'icon desc desc desc';
  padding: ${unit * 3}px;

  svg {
    width: ${unit * 17}px;
    margin-right: ${unit * 6}px;
  }
`;

const ListItemTitle = styled(Heading)`
  font-size: ${unit * 5}px;
  grid-area: title;
  align-items: center;
  display: flex;
`;

const ListItemDescription = styled(Text)`
  font-size: ${unit * 3}px;
  grid-area: desc;
  align-items: flex-start;
  display: flex;
`;

const makeListIcon = (component) => styled(component)`
  grid-area: icon;
`;

export interface ListItemSubComponents {
  Title: typeof ListItemTitle;
  Description: typeof ListItemDescription;
}

export interface ListItemProps {
  children?: React.ReactChild | React.ReactChild[];
}

const ListItem: React.FC<ListItemProps> & ListItemSubComponents = ({
  children,
}: ListItemProps) => <ListItemContainer>{children}</ListItemContainer>;

ListItem.Title = ListItemTitle;
ListItem.Description = ListItemDescription;

export interface ServiceListSubComponents {
  Item: typeof ListItem;
  Icons: {
    Phone: typeof PhoneIcon;
    Server: typeof ServersIcon;
    Web: typeof WebDevIcon;
  };
}

export interface ServicesProps {
  children?: React.ReactChild | React.ReactChild[];
  className?: string;
}

export const Services: React.FC<ServicesProps> & ServiceListSubComponents = ({
  children,
  className,
}: ServicesProps) => (
  <ListContainer className={className}>{children}</ListContainer>
);

Services.Item = ListItem;
Services.Icons = {
  Phone: makeListIcon(PhoneIcon),
  Server: makeListIcon(ServersIcon),
  Web: makeListIcon(WebDevIcon),
};
