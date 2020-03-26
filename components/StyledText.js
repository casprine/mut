import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components';

import { ThemeContext } from '~/context';

const StyledText = ({ color, style, heading, ...rest }) => {
  const { activeTheme } = useContext(ThemeContext);

  return <Styled {...rest} style={[style]} activeTheme={activeTheme} color={color} heading={heading} />;
};

const Styled = styled(Text)`
  color: ${({ theme, color, activeTheme }) => {
    // let activeColor = theme.colors[activeTheme][color];
    // return activeColor;
    console.log({
      color: theme.colors[activeTheme][color],
    });
    return '#000028';
  }};
`;

StyledText.defaultProps = {
  color: 'regularText',
  handing: false,
};
export default StyledText;
